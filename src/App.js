import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavDrawer from './NavDrawer/NavDrawer';
import Welcome from './Pages/Welcome/Welcome';
import PlaceholderManager from './Pages/Player/PlaceholderManager';
import Search from './Pages/Search/Search';
import Queue from './QueueDrawer/Queue'

export default function App() {

  // User state allows the user name to be requested from Spotify via the Welcome page and then displayed in the nav drawer.
  const [user, setUser] = useState('No active user');

  // Queue state determines if the queue drawer should be rendered.
  const [queue, setQueue] = useState(false);

  return (
    <div className={styles.app}>
      <Router>
        <NavDrawer user={user} queue={queue} setQueue={setQueue}/>
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
        { queue && <Queue /> }
      </Router>
    </div>
  );
}
