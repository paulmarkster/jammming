import React, { useEffect } from 'react';
import './Welcome.css';
import { getTokens } from '../spotify/spotifyOAuth';
import { getProfile } from '../spotify/spotifyAPI';



export default function Welcome({setUser}) {

  useEffect(() => {

    // Check if the URL includes a Spotify query string in response to an authorization request.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Initiate an access token request and a user profile request if query string is present.
    if (code) {
      getTokens(code).then(() => {
        getProfile().then((profile) => {
          setUser(profile.display_name);
        });
      });
    };

    return () => {
      // Remove the Spotify callback query string from the URL to avoid repeated token requests.
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      const updatedUrl = url.search ? url.href : url.href.replace('?', '');
      window.history.replaceState({}, '', updatedUrl);
    }
  });

  return (
    <div className='main-content'>
      <div className='welcome'>
        <p className='welcome-text'>Jammming</p>
      </div>
      <div className='powered-by'>
        <p className='powered-by-text'>Powered by:</p>
        <div className='spotify-icon'></div>
      </div>
    </div>
  );
}