import React from 'react';
import logo from './logo.svg';
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
        <input type='button' className='button'>
          <span></span>
          <span></span>
          <span></span>
        </input>
      </header>
      <div className='main'></div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
