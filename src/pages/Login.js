import { React, useState } from 'react';
import './Login.css';

export function Login() {
    const [clientId, setClientId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    return (
        <div id='login-content'>
            <div id='login-container'>
                <h2>Enter User Credentials</h2>
                <div className='login-client-input'>
                    <label>Client id: </label>
                    <input 
                        type='text' 
                        required
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                    />
                </div>
                <div className='login-client-input'>
                    <label>Client secret: </label>
                    <input 
                        type='text'
                        required
                        value={clientSecret} 
                        onChange={(e) => setClientSecret(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </div>
        </div>
    );
}