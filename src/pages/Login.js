import React, { useState } from 'react';
import { getAuth, getTokens } from '../spotify/spotifyOAuth';
import './Login.css';

export default function Login() {
    const [parms, setParms] = useState({});

    // Check if the URL includes a Spotify callback query string in response to an authorization request.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Remove the Spotify callback query string from the URL to avoid repeated token requests.
    const url = new URL(window.location.href);
    url.searchParams.delete("code");
    const updatedUrl = url.search ? url.href : url.href.replace('?', '');
    window.history.replaceState({}, '', updatedUrl);

    // Initiate a token request if the query string does contain a Spotify callback query string.
    if (code) {
        getTokens(code);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setParms((prevParms) => ({ ...prevParms, [name]: value }));
    };

    const handleSubmit = () => {
        localStorage.setItem('client_id', parms.clientId)
        getAuth();
    };

    return (
        <div id='login-content'>
            <div id='login-container'>
                <h2>Enter User Credentials</h2>
                <form className='login-client-input'>
                    <label>Client id: </label>
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
        </div>
    );
}