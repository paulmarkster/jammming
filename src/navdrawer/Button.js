import React from 'react'
import './Button.css';

export default function Button({buttonStyle, buttonText}) {

    let style = {};
    if (buttonStyle === 'tonal') {
        // Set tonal button colors.
        style = { color: '#151e0b', backgroundColor: '#dbe7c8' };
    } else if (buttonStyle === 'filled') {
        // Set filled button colors.
        style = { color: '#fff', backgroundColor: '#4b662c'};
    };

    return (
        <button className='button' type='button' style={style}>{buttonText}</button>
    );
}
