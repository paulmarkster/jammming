import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { getAuth } from './spotify/spotifyOAuth';
import setClientId from './appClientId';
import NavDrawer from './navdrawer/NavDrawer';
import Welcome from './page-welcome/Welcome';
import PlaceholderManager from './pages-temp/PlaceholderManager';
import Search from './page-search/Search';

export default function App() {

  const [user, setUser] = useState('No active user');

  // Obtain user authenication with getAuth() when mounting App.
  // Authorization continues on the Welcome page via a redirect url sent to the Spotify server from getAuth().
  useEffect(() => {

    // Protect against authorizing twice when in strict mode.
    if (sessionStorage.getItem('client_id') === null) {
      setClientId();
      getAuth();
    }
  }, []);

  return (
    <div className='app'>
      <Router>
        <NavDrawer user={user} />
        <Routes>
          <Route 
            exact path='/' 
            element={<Welcome setUser={setUser} />} 
          />
          <Route 
            exact path='AddtoQueue' 
            element={<Search />} 
          />
          <Route 
            exact path='MusicPlayer' 
            element={<PlaceholderManager />} 
          />
        </Routes>
      </Router>
    </div>
  );
}
