import React, { Component } from 'react';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Resumee from './Resumee';
import Portfolio from './Portfolio';
import { API_ROOT } from '../api-config';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
  }

  componentWillMount() {
    fetch(`${API_ROOT}profiles`)
    .then(response => response.json())
    .then(json => {
      const profile = json[0];
      this.setState({profile});
      window.jqueryBinder();
    })
    .catch(error => console.error('error', error));
  }

  render() {
    return (
      <div className="App">
      <Header profile={this.state.profile} />
      {
        this.state.profile ?
        <div>
          <section id="hero">
            <div className="hero-container">
              <img className="profile-img" src={this.state.profile.photoUrl} alt=""/>
              <h1>
                {
                  this.state.profile.role
                }
              </h1>
              <h2>
                {
                  this.state.profile.skills.filter(skill => skill.expert).map(skill => {
                    return skill.name;
                  }).sort().join(' - ')
                }
              </h2>
              <div id="social">
                <a href={this.state.profile.twitterUrl} target="_blank"><i className="fa fa-twitter"></i></a>
                <a href={this.state.profile.facebookUrl} target="_blank"><i className="fa fa-facebook"></i></a>
                <a href={this.state.profile.googlePlusUrl} target="_blank"><i className="fa fa-google-plus"></i></a>
                <a href={this.state.profile.linkedinUrl} target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href={this.state.profile.githubUrl} target="_blank"><i className="fa fa-github"></i></a>
              </div>
            </div>
          </section>
          <main id="main">
            <Resumee profile={this.state.profile} />
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
        : <div></div>
      }
      </div>
    );
  }
}

export default App;
