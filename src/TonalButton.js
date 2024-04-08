import React from 'react'
import './TonalButton.css';

export default function TonalButton({text}) {
    return (
        <button className='tonal-button' type='button'>{text}</button>
    );
}
