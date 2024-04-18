import React from 'react';

async function ObtainToken(clientInfo) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(clientInfo.clientId + ':' + clientInfo.clientSecret).toString('base64')),
      },
    });

    return await response.json();
}

export default function GetToken(clientInfo) {
    
}