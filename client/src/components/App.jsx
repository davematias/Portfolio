import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Resumee from './Resumee'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router path="/" history={browserHistory} >
          <Route path="/" component={Home} />
          <Route path="/resumee" component={Resumee} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
