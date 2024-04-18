import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavDrawer from './navdrawer/NavDrawer';
import Welcome from './page-welcome/Welcome';
import PlaceholderDeveloper from './pages-temp/PlaceholderDeveloper';
import PlaceholderManager from './pages-temp/PlaceholderManager';
import Login from './page-login/Login';

export default function App() {

  const [loginStatus, setLoginStatus] = useState('Logged Out');
  const [activeView, setActiveView] = useState('Welcome');
    
  return (
    <div className='app'>
      <Router>
        <NavDrawer loginStatus={loginStatus} currentView={activeView} setView={setActiveView} />
        <Routes>
            <Route 
              exact path='/' 
              element={<Welcome />} 
            />
            <Route 
              exact path='AddtoQueue' 
              element={<PlaceholderDeveloper />} 
            />
            <Route 
              exact path='MusicPlayer' 
              element={<PlaceholderManager />} 
            />
            <Route 
              exact path='Login' 
              element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} setView={setActiveView} />} 
            />
        </Routes>
      </Router>
    </div>
  );
}
