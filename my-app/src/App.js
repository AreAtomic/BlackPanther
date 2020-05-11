import React from 'react';
import logo from './logo.svg';
import Debout from './full.png';
import Marvel from './marvel.jpg';
import Genou from './genou.png';
import Kick from './kick.png';
import Griffe from './griffe.png';
import ui from './ui.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='menu'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Film
          </a>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Insta
          </a>
        </div>
      </header>
      <div className='menu-button'>
        <input type='button' className='button' />
        <div className='hover'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='main'>
        <h1>
          BLACK
          <br />
          <span>PANTHER</span>
        </h1>
        <img src={Debout} alt='black panther' className='debout' />
      </div>
      <div className='footer'>
        <img src={Marvel} className='marvel-image' />
        <div className='marvel'></div>
        <div className='nav'>
          <button>
            <img src={ui} />
            <text>MORE</text>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
