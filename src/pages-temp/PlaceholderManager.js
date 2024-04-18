import React from 'react';
import './Placeholder.css';

export default function PlaceholderManager() {
    return (
        <div className='content'>
            <img className='image' src={require('./Manager.jpg')} alt='Ego driven manager'/>
            <p className='text'>Don't harass my staff!  We're working on it!!!</p>
        </div>
    );
}