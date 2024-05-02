import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavDrawer from './NavDrawer/NavDrawer';
import Welcome from './Pages/Welcome/Welcome';
import PlaceholderManager from './Pages/Player/PlaceholderManager';
import Search from './Pages/Search/Search';
import QueueDrawer from './QueueDrawer/QueueDrawer'

export default function App() {

  // State to allow the user name to be requested from Spotify via the Welcome page and then displayed in the NavDrawer.
  const [user, setUser] = useState('No active user');

  // State that determines if the QueueDrawer should be rendered.
  const [showQueue, setShowQueue] = useState(false);

  // State that manages changes to the queue.
  const [updateQueue, setUpdateQueue] = useState({});

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
        { showQueue && <QueueDrawer updateQueue={updateQueue} /> }
      </Router>
    </div>
  );
}
