export async function getProfile() {

  // Fetch user's profile.
  const accessToken = sessionStorage.getItem('access_token'); 
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });
  return await response.json();
}

export async function spotifySearch(query) {

  // Fetch search query results.
  const accessToken = sessionStorage.getItem('access_token');
  const response = await fetch(query, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });
  return await response.json();
}

export async function getUsersQueue() {

  // Fetch user's play queue.
  const accessToken = sessionStorage.getItem('access_token'); 
  const response = await fetch('https://api.spotify.com/v1/me/player/queue', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + accessToken }
  });
  return await response.json();
}