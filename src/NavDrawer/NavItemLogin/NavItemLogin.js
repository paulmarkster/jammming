import React from 'react';
import styles from './NavItemLogin.module.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NavItem from '../NavItem/NavItem';
import setClientId from '../../appClientId';
import { getAuth } from '../../Spotify/spotifyOAuth';

export default function NavItemLogin({user}) {

  const loggedOut = !sessionStorage.getItem('client_id') ? true : false;
  const buttonStyle = loggedOut ? {display: 'block'} : {display: 'none'};

  const handleOnClick = () => {

    // Initiate user authenication.
    // Authorization continues on the Welcome page via a redirect url sent to the Spotify server from getAuth().
    if (loggedOut) {
      setClientId();
      getAuth();
    };
  }

  return (
    <div className={styles.navitem}>
      <NavItem icon={<PersonOutlineIcon />} text={user} />
      <button type='button' className={styles.button} style={buttonStyle} onClick={handleOnClick}>Login</button>
    </div>
  );
}