import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavDrawer } from './navdrawer/NavDrawer';
import { Welcome } from './pages/Welcome';
import { PlaceholderDeveloper } from './pages/PlaceholderDeveloper';
import { PlaceholderManager } from './pages/PlaceholderManager';

export default function App() {

  return (
    <div className='app'>
      <Router>
        <NavDrawer />
        <Routes>
            <Route exact path='Welcome' element={<Welcome />} />
            <Route exact path='Add to Queue' element={<PlaceholderDeveloper />} />
            <Route exact path='Music Player' element={<PlaceholderManager />} />
        </Routes>
      </Router>
    </div>
  );
}
