import React, { useEffect, useState } from 'react';
import { getAuth, getTokens } from '../spotify/spotifyOAuth';
import { getProfile } from '../spotify/spotifyAPI';
import './Login.css';

export default function Login({loginStatus, setLoginStatus, setView}) {
  const [parms, setParms] = useState({});

  useEffect(() => {

    // Check if the URL includes a Spotify callback query string in response to an authorization request.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Initiate a token request if the query string does contain a Spotify callback query string.
    if (code) {
      getTokens(code).then(() => {
        getProfile().then((profile) => {
          sessionStorage.setItem('user_name', profile.display_name);
          setLoginStatus('Logged In');
        });
      });
    };

    return () => {

      // Remove the Spotify callback query string from the URL to avoid repeated token requests.
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      const updatedUrl = url.search ? url.href : url.href.replace('?', '');
      window.history.replaceState({}, '', updatedUrl);

      // Ensure view state is 'Login' given OAuth redirected here.
      setView('Login')
    }
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setParms((prevParms) => ({ ...prevParms, [name]: value }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem('client_id', parms.clientId)
    getAuth();
  };

  let pageContent;
  if (loginStatus === 'Logged Out') {
    pageContent = (
      <div>
        <h2>Jammming App Developer</h2>
        <form id='login-client-input'>
          <label>Developer id: </label>
          <input 
            type='text' 
            name='clientId'
            required
            value={parms.clientId}
            onChange={handleChange}
          />
        </form>
          <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
      )
  } else {
    pageContent = (
      <div>
        <h3>Authorization completed!</h3>
        <p>Select a page in the navigation drawer to continue.</p>
      </div>
    )
  }

  return (
      <div id='login-content'>
          <div id='login-container'>
              { pageContent }
          </div>
      </div>
  );
}