import React from 'react';
import './Placeholder.css';

export default function PlaceholderDeveloper() {
    return (
        <div className='content'>
            <img className='image' src={require('./SWDeveloper.jpg')} alt='Crazed developer' />
            <p className='text'>Gimme a break!  I'm workin on it!!!</p>
        </div>
    );
}