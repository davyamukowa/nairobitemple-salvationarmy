import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

function ContactPage(props) {
  return (
    <Page>
      <div className="content">
        <h2 className="title">Location</h2>
        <Map fullWidth={true} />
        <div className="contact-page">
          <br />
          <p>
            The Salvation Army Nairobi Central Temple<br />
            At OTC Oposite Tuskys supermarket<br />
            Nairobi Near Muthurwa market<br />
            <br />
            Phone: 02 9672 1691<br />
          </p>
          <br />
          <a href="mailto:info@Nairobicentraltemple.org"><i className="far fa-envelope"></i> Email Us</a>
        </div>
      </div>
    </Page>
  )
}

export default ContactPage;
