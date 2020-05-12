import React, { Component } from 'react';
import logo from './logo.svg';
import Debout from './full.png';
import Marvel from './marvel.jpg';
import Genou from './genou.png';
import Kick from './kick.png';
import Griffe from './griffe.png';
import deboutsvg from './logo1.png';
import kicksvg from './logo2.png';
import griffesvg from './logo3.png';
import genousvg from './logo4.png';
import ui from './ui.svg';
import './App.css';

const images = [Debout, Kick, Griffe, Genou];
const classe = ['debout', 'kick', 'griffe', 'genou'];

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      active: 1,
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(e) {
    this.setState({ active: e.target.id });
    var bp = document.getElementById('bp');
    bp.src = images[e.target.id];
    bp.className = classe[e.target.id];
    var active = document.getElementById(e.target.id);
    if (e.target.id == 0) {
      var inactive = [
        document.getElementById(1),
        document.getElementById(2),
        document.getElementById(3),
      ];
    }
    if (e.target.id == 1) {
      var inactive = [
        document.getElementById(0),
        document.getElementById(2),
        document.getElementById(3),
      ];
    }
    if (e.target.id == 2) {
      var inactive = [
        document.getElementById(0),
        document.getElementById(1),
        document.getElementById(3),
      ];
    }
    if (e.target.id == 3) {
      var inactive = [
        document.getElementById(1),
        document.getElementById(2),
        document.getElementById(0),
      ];
    }
    active.className = 'logo active';
    for (let e in inactive) {
      inactive[e].className = 'logo';
    }
  }

  render() {
    const image = images[0];
    return (
      <div className='container'>
        <header className='header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='menu'>
            <a
              className='App-link'
              href='https://aureliensebe.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              DESIGNER
            </a>
            <a
              className='App-link'
              href='https://facebook.com/aureliensebe.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
            <a
              className='App-link'
              href='https://instagram.com/aureliensebe'
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
          <div>
            <h1>
              BLACK
              <br />
              <span>PANTHER</span>
            </h1>
            <h2>"Wakanda forever!"</h2>
          </div>
          <img src={image} alt='black panther' className='debout' id='bp' />
        </div>
        <div className='footer'>
          <img src={Marvel} className='marvel-image' />
          <div className='marvel'></div>
          <div className='nav'>
            <a target='_blank' href='https://aureliensebe.com'>
              <button>
                <img src={ui} />
                <text>MORE</text>
              </button>
            </a>
            <img
              src={deboutsvg}
              className='logo active'
              id='0'
              onClick={this.changeImage}
            />
            <img
              src={kicksvg}
              className='logo'
              id='1'
              onClick={this.changeImage}
            />
            <img
              src={griffesvg}
              className='logo'
              id='2'
              onClick={this.changeImage}
            />
            <img
              src={genousvg}
              className='logo'
              id='3'
              onClick={this.changeImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
