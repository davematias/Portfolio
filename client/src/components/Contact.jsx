import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h3 className="section-title">Contact</h3>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
          </div>
          
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">

              <div className="col-lg-3 col-md-4">

                <div className="info">
                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"></i>
                    <p>info@example.com</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

              </div>

              <div className="col-lg-5 col-md-8">
                <div className="form">
                  <div id="sendmessage">Your message has been sent. Thank you!</div>
                  <div id="errormessage"></div>
                  <form action="" method="post" role="form" className="contactForm">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validation"></div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
