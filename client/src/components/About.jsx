import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="container">
            <div className="row about-container">

              <div className="col-lg-12 content order-lg-1 order-1">
                <h2 className="title">About</h2>
                <p>
                  This website was made with <a href="https://expressjs.com/" rel="noopener noreferrer" target="_blank">ExpressJS</a> + <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank">MongoDB</a> for the back-end and <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a> + <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a> for the front-end.
                  The server is hosted on <a href="https://dashboard.heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> and some files are stored on <a href="https://cloud.google.com/" rel="noopener noreferrer" target="_blank">Google Cloud</a>.
                </p>

                <p>
                  The bootstrap template was based on <a href="https://bootstrapmade.com/regna-bootstrap-onepage-template/" rel="noopener noreferrer" target="_blank">Regna</a> and the icons were made by <a href="https://fontawesome.com/" rel="noopener noreferrer" target="_blank">FontAwesome</a> and <a href="https://www.flaticon.com/authors/freepik" rel="noopener noreferrer" target="_blank">Freepik </a>
                  from <a href="https://www.flaticon.com/" rel="noopener noreferrer" target="_blank">www.flaticon.com</a> (licensed by <a  href="https://creativecommons.org/licenses/by/3.0/" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a>)
                </p>

                <p>
                    Fork it on <a href="https://github.com/davematias/Portfolio" rel="noopener noreferrer" target="_blank">Github!</a>
                </p>

              </div>

            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default About;
