

export async function getAuth() {

  const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
  const codeVerifier  = generateRandomString(64);
  sessionStorage.setItem('code_verifier', codeVerifier);

  const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  }

  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed);
  const clientId = sessionStorage.getItem('client_id');
  const redirectUri = 'http://localhost:3000';
  const scope = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize")
  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();

}

export async function getTokens(code) {
  const clientId = sessionStorage.getItem('client_id');
  const redirectUri = 'http://localhost:3000';
  
  // stored in the previous step
  const codeVerifier = sessionStorage.getItem('code_verifier');
  
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }
  
  const body = await fetch('https://accounts.spotify.com/api/token', payload);
  const response = await body.json();
  
  const { access_token, refresh_token, expires_in } = response;
  sessionStorage.setItem('access_token', access_token);
  sessionStorage.setItem('refresh_token', refresh_token);
  const now = new Date();
  sessionStorage.setItem('expires', new Date(now.getTime() + (expires_in * 1000)));
}

export async function getRefreshTokens() {

  const now = new Date().getTime();
  const expires = sessionStorage.getItem('expires');
  const expired = (now >= expires) ? true : false;

  if (expired) {
    const refreshToken = sessionStorage.getItem('refresh_token');
    const clientId = sessionStorage.getItem('client_id');
    const url = "https://accounts.spotify.com/api/token";

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId
      }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    const { access_token, refresh_token, expires_in } = response;
    sessionStorage.setItem('access_token', access_token);
    sessionStorage.setItem('refresh_token', refresh_token);
    const now = new Date();
    sessionStorage.setItem('expires', new Date(now.getTime() + (expires_in * 1000)));
  }
}
