import React, { Component } from 'react';

class Resumee extends Component {
  render() {
    return (
      <div>
        <section id="resumee">
          <div className="container wow fadeIn">
            <div className="section-header">
              <h3 className="section-title">Services</h3>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-desktop"></i></a></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-bar-chart"></i></a></div>
                  <h4 className="title"><a href="">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-paper-plane"></i></a></div>
                  <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-photo"></i></a></div>
                  <h4 className="title"><a href="">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-road"></i></a></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="box">
                  <div className="icon"><a href=""><i className="fa fa-shopping-bag"></i></a></div>
                  <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Resumee;
