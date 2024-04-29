import { React, useState } from 'react';
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

  // Initiate user authenication with getAuth(). This will open a dialogue between the user and the Spotify login server.
  // Authorization starts subsequent to authentication on the Welcome page via a redirect url sent to the Spotify server from getAuth().
  if (!sessionStorage.getItem('client_id')) {
    setClientId();
    getAuth();
  };

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
