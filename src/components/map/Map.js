import React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    const API_KEY='AIzaSyARjU5xBCplgOPHWJUhRTKNRglNrrlaL1Y';
    return (<iframe title="Nairobi Central Temple"
    width="100%"
    height="400"
    frameborder="0"
    src={`https://www.google.com/maps/place/Salvation+Army+-+Nairobi+Central,+River+Road,+Nairobi/@-1.2856493,36.8310321,19z/data=!4m12!1m6!3m5!1s0x182f112eba3c4989:0x92a99d62f4f92d74!2sOTC!8m2!3d-1.284054!4d36.831179!3m4!1s0x182f112f23ac8375:0xa8c638b90585ea26!8m2!3d-1.2856071!4d36.8315036`}
    allowfullscreen>
  </iframe>)
  }
}

export default Map;
