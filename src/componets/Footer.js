import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="/">Web design</a></li>
                <li><a href="/">Development</a></li>
                <li><a href="/">Hosting</a></li>
              </ul>
            </div>
            <div className="col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="/">Web design</a></li>
                <li><a href="/">Development</a></li>
                <li><a href="/">Hosting</a></li>
              </ul>
            </div>
            <div className="col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="/">Company</a></li>
                <li><a href="/">Team</a></li>
                <li><a href="/">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3 item text">
              <h3>Enjoy.com</h3>
              <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
            </div>
            <div className="col item social">
              <a href="https://www.linkedin.com/in/raj-shimpi-892b8b253"><i className="fa fa-linkedin"></i></a>
              <a href="https://twitter.com/RajShimpi12"><i className="fa fa-twitter"></i></a>
              <a href="https://www.facebook.com/raj.shimpi.798"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/_raj_shimpi/?hl=en"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
