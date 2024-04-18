

/* For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 

let clientId; 
let clientSecret;

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/tracks/2UkX27EXS59qpKUXrMTZlK", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function artistSearch(access_token) {
    const response = await fetch('https://api.spotify.com/v1/search?q=worakls&type=track&limit=1', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + access_token },
    });

    return await response.json();
}

getToken().then(response => {
  getTrackInfo(response.access_token).then(profile => {
    console.log(profile)
  })
});


if (clientId && clientSecret) {
  getToken().then(response => {
    artistSearch(response.access_token).then(
      searchList => {console.log(searchList.tracks.items[0].album)}
    );
  })
} else {
  console.log('No client id or client secret provided.');
}
*/

export async function getProfile() {
  const accessToken = sessionStorage.getItem('access_token'); 
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });

  return await response.json();
}