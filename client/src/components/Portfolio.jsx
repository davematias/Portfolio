import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <section id="portfolio">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h3 className="section-title">Portfolio</h3>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div className="row">

              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-logo">Logo</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row" id="portfolio-wrapper">
              <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="">
                  <img src="img/portfolio/app1.jpg" alt="" />
                  <div className="details">
                    <h4>App 1</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                <a href="">
                  <img src="img/portfolio/web2.jpg" alt=""/>
                  <div className="details">
                    <h4>Web 2</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="">
                  <img src="img/portfolio/app3.jpg" alt=""/>
                  <div className="details">
                    <h4>App 3</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                <a href="">
                  <img src="img/portfolio/card1.jpg" alt=""/>
                  <div className="details">
                    <h4>Card 1</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                <a href="">
                  <img src="img/portfolio/card2.jpg" alt=""/>
                  <div className="details">
                    <h4>Card 2</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                <a href="">
                  <img src="img/portfolio/web3.jpg" alt=""/>
                  <div className="details">
                    <h4>Web 3</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                <a href="">
                  <img src="img/portfolio/card3.jpg" alt=""/>
                  <div className="details">
                    <h4>Card 3</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="">
                  <img src="img/portfolio/app2.jpg" alt=""/>
                  <div className="details">
                    <h4>App 2</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
                <a href="">
                  <img src="img/portfolio/logo1.jpg" alt=""/>
                  <div className="details">
                    <h4>Logo 1</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
                <a href="">
                  <img src="img/portfolio/logo3.jpg" alt=""/>
                  <div className="details">
                    <h4>Logo 3</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                <a href="">
                  <img src="img/portfolio/web1.jpg" alt=""/>
                  <div className="details">
                    <h4>Web 1</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
                <a href="">
                  <img src="img/portfolio/logo2.jpg" alt=""/>
                  <div className="details">
                    <h4>Logo 2</h4>
                    <span>Alored dono par</span>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </section>

      </div>
    );
  }
}

export default Portfolio;
