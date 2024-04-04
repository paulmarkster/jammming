import React from 'react';
import './Welcome.css';

export function Welcome() {
    return (
        <div className='main-content'>
            <div className='welcome'>
                <p className='welcome-text'>Jammming</p>
            </div>
            <p className='powered-by-text'>Powered by:</p>
            <div className='spotify-icon'></div>
        </div>
    );
}