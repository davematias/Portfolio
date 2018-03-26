import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="container">

            <div id="logo" className="pull-left">
              <a href="#hero">              
                <h1><a href="#hero">David Matias</a></h1>
              </a>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="#hero">Home</a></li>
                <li><a href="#resumee">Resumee</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>         
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
