import logo from './logo.svg';
import './reset.css';
import './App.css';
import { NavDrawer } from './NavDrawer';

function App() {
  return (
    <div className="app">
      <NavDrawer />
      <div className='main-content'>
        <div className='welcome'>
          <p className='welcome-text'>Jammming</p>
        </div>
        <p className='powered-by-text'>Powered by:</p>
        <div className='spotify-icon'></div>
      </div>
    </div>
  );
}

export default App;
