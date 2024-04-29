import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavDrawer from './navdrawer/NavDrawer';
import Welcome from './page-welcome/Welcome';
import PlaceholderManager from './pages-temp/PlaceholderManager';
import Search from './page-search/Search';

export default function App() {

  const [user, setUser] = useState('No active user');

  return (
    <div className={styles.app}>
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
