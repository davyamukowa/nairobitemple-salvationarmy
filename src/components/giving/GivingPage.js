import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import BibleVerse from '../utils/BibleVerse';
import './GivingPage.css';

class GivingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/banner/giving.jpg" titleColour="white" title="GIVING" />
        <div className="content">
          <p>
            <strong>So let each one give as he purposes in his heart, not grudgingly or of necessity: for God loves a cheerful giver.</strong>
            <BibleVerse reference="2CO.9.7" text="2 Corinthians 9:7" />
          </p>
          <p>At Nairobi central temple we have our TILL number that you can share your offerings.</p>
         
          
        </div>
      </Page>
    )
  }

}

export default GivingPage;
