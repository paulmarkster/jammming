import './App.css';
import { React, useState } from 'react';
import { NavDrawer } from './NavDrawer';
import { Welcome } from './Welcome';
import { PlaceholderDeveloper } from './PlaceholderDeveloper';
import { PlaceholderManager } from './PlaceholderManager';

function App() {

  const [activeView, setActiveView] = useState('Music Player');

  let renderView;
  if (activeView === 'Welcome') {
    renderView = ( <Welcome /> );
  } else if (activeView === 'Add to Queue') {
    renderView = ( <PlaceholderDeveloper /> );
  } else if (activeView === 'Music Player') {
    renderView = ( <PlaceholderManager /> );
  };

  return (
    <div className='app'>
      <NavDrawer currentView={activeView} setView={setActiveView} />
      {renderView}
    </div>
  );
}

export default App;
