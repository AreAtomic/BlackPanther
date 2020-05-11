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
      </header>
      <div className='menu-button'>
        <input type='button' className='button' />
        <div className='hover'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='main'></div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
