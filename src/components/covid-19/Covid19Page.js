import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './Covid19Page.css';

function Covid19Page(props) {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table.jpg" />
      <div className="content">
        <p>
          <h3>Limited meetings in person</h3>
          <p>
            <img src='/img/COVID_Safe_Badge.png' alt='Covid Safe Badge' className="covid-img" align='left'></img>
            We are now meeting at our church building At Nairobi Central Temple in OTC  as a COVID safe venue.
            The limit on attendees is as per gavernment requlation, excluding staff. In order to regulate numbers,
            regular attenders are required to obtain a Sunday pass for each Sunday service they attend.
            Numbers are capped to safely allow extra visitors unfamiliar with our pass system.
            Inside, social distancing is practised, masks and hand sanitiser are available,
            and there is no congregational singing or passing an offering plate.
          </p>

          <p>There is only one Sunday service at 10am, with a children’s service running at the sunday school Hall at the same time</p>

          <h3>Conditions of entry</h3>
          <ol>
            <li>All site visitors must check-in upon arrival, provide their details for contact tracing, and have their temperature taken.</li>
            <li>Sanitise hands as you enter the building (sanitiser provided,) and frequently wash your hands with soap for at least 20 seconds.</li>
            <li>Practice physical distancing of 1.5m at all times.</li>
            <li>Do not enter the building if you have travelled overseas or been in in contact with the Virus in the past month, or are experiencing a fever, cough, sore throat, or shortness of breath.</li>
            <li>Leave the premises immediately and inform a staff member if you develop symptoms or start feeling sick while at church.</li>
          </ol>
        </p>
      </div>
    </Page>
  )
}

export default Covid19Page;
