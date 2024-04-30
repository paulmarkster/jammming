export async function getProfile() {
  const accessToken = sessionStorage.getItem('access_token'); 
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });

  return await response.json();
}

export async function spotifySearch(query) {

  // Fetch and return query results.
  const accessToken = sessionStorage.getItem('access_token');
  const response = await fetch(query, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });

  return (await response).json();
}