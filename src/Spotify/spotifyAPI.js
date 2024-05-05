export async function getProfile() {

  try {
    // Fetch user's profile.
    const accessToken = sessionStorage.getItem('access_token'); 
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function spotifySearch(query) {

  try {
    // Fetch search query results.
    const accessToken = sessionStorage.getItem('access_token');
    const response = await fetch(query, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getUsersQueue() {

  try {
    // Fetch user's play queue.
    const accessToken = sessionStorage.getItem('access_token'); 
    const response = await fetch('https://api.spotify.com/v1/me/player/queue', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addToPlaybackQueue (trackId) {

  try {
    // Add track to playback queue.
    const accessToken = sessionStorage.getItem('access_token');
    const url = 'https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A' + trackId;
    await fetch(url, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
  } catch(error) {
    console.log(error);
  }
}

export async function getAvailableDevices() {

  try {
    // Fetch user's play queue.
    const accessToken = sessionStorage.getItem('access_token'); 
    const response = await fetch('https://api.spotify.com/v1/me/player/devices', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}