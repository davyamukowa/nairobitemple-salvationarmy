import React from 'react';
import BibleVerse from '../utils/BibleVerse';

// const imgStyleLeft = {
//   align: 'left',
//   border: '3px solid #dcd4c5',
//   marginRight: 20,
//   marginTop: 0,
//   marginBottom: 10,
// };

function Welcome(props) {
  return (
    <div>
      <h2>WELCOME</h2>
      <p>
        The Salvation Army is an international movement, and an evangelical branch of Universal Christian Church. Its message is based on the Bible;
        it's ministry motivated by the love of God. The mission is both spiritual and practical, encompassing the
        preaching of the Gospel and alleviating human suffering and distress without discrimination.
        The soul of The Salvation Army is found in nationwide congregations where Christian believers seek their
       salvation and serve their communities <a href='https://www.salvationarmy.org/' target="_blank" rel="noopener noreferrer">For information click here for Salvation Army IHQ.</a>
      </p>
      <p>
       Nairobi Central Temple is among the churches opened in kenya to preach the Gospel of Jesus.  We are a body of believers, in Jesus Christ, who meet weekly on Sunday mornings for worship and fellowship.<br />
        During our Sunday morning services, we provide services for younger kids, and Yourth  facilities and children’s church.<br />
        If you are visiting in the area, or seeking a place to worship, we heartily invite you to come along and enjoy the fellowship of God’s people, Listen to our Sweet Music from our Brass Band, Songsters and our Praise and Worship Team.<br />
        <br />
        We assure you of a warm welcome at all times.
      </p>
      <br />Our purpose statement is:
      <br />
      <div className="blockquote">To glorify God as a loving fellowship<br />of Christlike disciplemakers.</div>
      <h2>Magnification</h2>
      <p>
        Our worship services glorify the Lord as we strive to keep Him at the centre of our church.<br />
        <em>
          <BibleVerse reference="PSA.34.3" text="Psalm 34:3" />
          <BibleVerse reference="1CO.10.31" text="1 Cor. 10:31" />
          <BibleVerse reference="MAT.4.10" text="Matt. 4:10" />
        </em>
      </p>
      <h2>Ministry</h2>
      <p>
        We are called to demonstrate the love of God to one another and the broader community through Spirit-filled ministry<br />
        <em>
          <BibleVerse reference="MAT.22.37-40" text="Matthew 22:37-40" />
          <BibleVerse reference="EPH.2.19" text="Ephesians 2:10" />
        </em>
      </p>
      <h2>Mission</h2>
      <p>
        The Great Commission is our mission of delivering God’s truth to the world<br />
        <em>
          <BibleVerse reference="MAT.28.18-20" text="Matthew 28:18-20" />
          <BibleVerse reference="MRK.13.10" text="Mark 13:10" />
        </em>
      </p>
      <h2>Membership</h2>
      <p>
        As members of Christ’s body, we are called to discover our place in the local community of believers<br />
        <em>
          <BibleVerse reference="EPH.2.19" text="Ephesians 2:19" />
          <BibleVerse reference="ACT.2.44" text="Acts 2:44" />
        </em>
      </p>
      <h2>Maturity</h2>
      <p>
        We pursue a growing relationship with God through Christ<br />
        <em>
          <BibleVerse reference="EPH.4.12-13" text="Ephesians 4:12-13" />
          <BibleVerse reference="COL.1.27-29" text="Colossians 1:27-29" />
        </em>
      </p>
      {/* <h2>Fellowship Photos</h2>
      <p>
        <img width="200" height="132" alt="_MG_4519" src="/img/about/_MG_4519.JPG" style={imgStyleLeft}></img>
        <img alt="IMG_4444" src="/img/about/IMG_4444_2.JPG" style={imgStyleLeft}></img>
        <img width="200" height="163" alt="IMG_4478" src="/img/about/IMG_4478.JPG" style={imgStyleLeft}></img>
        <img width="133" height="200" alt="_MG_4524" src="/img/about/_MG_4524.jpg" style={imgStyleLeft}></img>
        <img alt="IMG_4443" src="/img/about/IMG_4443_2.JPG" style={imgStyleLeft}></img>
      </p> */}
    </div>
  )
}

export default Welcome;
