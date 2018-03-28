import React, { Component } from 'react';
import { API_ROOT } from '../api-config';
import PortfolioItem from './PortfolioItem';
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch(`${API_ROOT}portfolios`)
    .then(response => response.json())
    .then(json => {
      this.setState({items: json});
      window.portfolioBinder();
    })
    .catch(error => console.error('error', error));
  }

  render() {
    return (
      <div>
        {
          this.state.items.length === 0 ?
          <div></div>
          :
            <section id="portfolio">
            <div className="container wow fadeInUp">
              <div className="section-header">
                <h3 className="section-title">Portfolio</h3>
                <p className="section-description">See what i've been up to lately</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter=".filter-work, .filter-hobby" className="filter-active">All</li>
                    <li data-filter=".filter-work">Work</li>
                    <li data-filter=".filter-hobby">Hobby</li>
                  </ul>
                </div>
              </div>
              <div className="row" id="portfolio-wrapper">
              {
                this.state.items.map((item, index) =>{
                  return <PortfolioItem key={index} item={item} />
                })
              }
              </div>
            </div>
          </section>
        }
      </div>
    );
  }
}

export default Portfolio;
