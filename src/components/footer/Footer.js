import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/about">About Us</Link><span className="footer-link-slash">/</span>
        <Link to="/covid19">COVID-19</Link><span className="footer-link-slash">/</span>
        <Link to="/events">What's On</Link><span className="footer-link-slash">/</span>
        <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
        <Link to="/resources">Resources</Link><span className="footer-link-slash">/</span>
        <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
        <Link to="/giving">Giving</Link>
      </div>
      <div className="row">
        <div className="col-sm">
          <div class="mp-brick-text"><h4>SERVICE TIMES<strong><br /></strong></h4>
            <p>Sundays<br />9:00am 9:45am — Outdoor Services</p>
            <p>Sundays<br />10:00am — Indoor Services</p>
            <p>
              Nairobi Central Temple<br />
              At OTC Oposite Tuskys,<br />
              P.O BOX 72153 - 00200<br />
              © The Salvation Army Nairobi Central Temple
            </p>
          </div>
          <div class="mp-brick-text">
            <h4>CONTACT</h4>
            <p>
              Phone: +254 726 011 697 or +254 713 599 831<br />
              Email: info@Nairobicentraltemple.com
            </p>
          </div>
        </div>
        {/* <div className="col-sm">
          <p className="footer-social-title">STAY CONNECTED</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/groups/584850305633207/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/FellowshipBC"><i className="fab fa-twitter"></i></a>
          </div>
        </div> */}
        <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
          <a href='/'>
            <img className="footer-logo float-right" src="img/fellowship_logo_white.png" srcSet="img/fellowship_logo_white.png 2x" alt="Nairobi central logo" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
