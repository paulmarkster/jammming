import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavDrawer from './NavDrawer/NavDrawer';
import Welcome from './Pages/Welcome/Welcome';
import PlaceholderManager from './Pages/Player/PlaceholderManager';
import Search from './Pages/Search/Search';
import QueueDrawer from './QueueDrawer/QueueDrawer'

export default function App() {

  // State for setting user id on Welcome page and rendering on NavDrawer.
  const [user, setUser] = useState('No active user');

  // State that requests QueueDrawer to render due to Spotify queue display request on NavDrawer.
  const [showQueue, setShowQueue] = useState(false);

  // State that requests QueueDrawer to refresh the Spotify queue due to changes made on the Search page.
  const [updateQueue, setUpdateQueue] = useState(false);

  return (
    <div className={styles.app}>
      <Router>
        <NavDrawer user={user} showQueue={showQueue} setShowQueue={setShowQueue}/>
        <Routes>
          <Route 
            exact path='/' 
            element={<Welcome setUser={setUser} />} 
          />
          <Route 
            exact path='AddtoQueue' 
            element={<Search setUpdateQueue={setUpdateQueue} />} 
          />
          <Route 
            exact path='MusicPlayer' 
            element={<PlaceholderManager />} 
          />          
        </Routes>
        { showQueue && <QueueDrawer updateQueue={updateQueue} setUpdateQueue={setUpdateQueue} /> }
      </Router>
    </div>
  );
}
