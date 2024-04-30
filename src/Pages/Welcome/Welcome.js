import React, { useEffect } from 'react';
import styles from './Welcome.module.css';
import { getTokens } from '../../Spotify/spotifyOAuth';
import { getProfile } from '../../Spotify/spotifyAPI';



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
    <div className={styles.container}>
      <div className={styles.welcome}>
        <p className={styles.welcometext}>Jammming</p>
        <div className={styles.poweredby}>
          <p className={styles.poweredbytext}>Powered by:</p>
          <div className={styles.icon}></div>
        </div>
      </div>
    </div>
  );
}