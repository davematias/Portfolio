import React, { Component } from 'react';
import About from './About'
import Header from './Header'
import Contact from './Contact'
import Resumee from './Resumee'
import Portfolio from './Portfolio'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <section id="hero">
        <div className="hero-container">
          <img class="profile-img" src="img/profile.png" alt=""/>
          <h1>Full-Stack Developer</h1>
          <h2>HTML5 - Javascript - NodeJS - C# - .Net - Android</h2>
        </div>
      </section>
      <main id="main">
        <Resumee />
        <Portfolio />
        <Contact />
        <About/>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container"></div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>David Matias</strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </div>
    );
  }
}

export default App;
