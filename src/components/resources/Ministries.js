import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
// import moment from 'moment';
import './ResourcesPage.css';
import { Link } from 'react-router-dom';

// const DATE_FORMAT_ISO = 'YYYY-MM-DD';
// const DATE_FORMAT_AUD = 'DD MMM YYYY';
// const GITHUB_NEWSLETTERS_URL = 'https://api.github.com/repos/digitalspider/fellowship/contents/public/newsletters';

// // String -> [String]
// async function getNewsletters() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//     },
//   };
//   const response = await fetch(GITHUB_NEWSLETTERS_URL, options);
//   const data = await response.json();
//   return data.map((file) => file.name).filter((filename) => filename.slice(-4) === '.pdf').reverse().slice(0, 10);
// }
const imgStyleRight = {
  borderRadius: '50%',
  float: 'right',
  border: '3px solid #dcd4c5',
  height: '215px',
  width: '249px',
  marginLeft: 20,
  marginBottom: 10,
};

class MinistriesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletters: [],
    };
  }

  // async componentDidMount(_prevProps) {
  //   const newsletters = await getNewsletters();
  //   this.setState({ newsletters });
  // }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/banner/table-bible.jpg" />
        <div className="container content">

          {/* <div className="item" key="Left">
            <h2>Newsletters</h2>
            <div className="container-vertical">
              {this.state.newsletters.map((value, index) => {
                return <div className="item" key={index}>
                  <h4><a target="_blank" rel="noopener noreferrer" href={'/newsletters/' + value}>{moment(value, DATE_FORMAT_ISO).format(DATE_FORMAT_AUD) + (index === 0 ? ' (Current)' : '')}</a></h4>
                </div>
              })}
            </div>
          </div> */}

          {/* <div className="item" key="Right">
            <h2>Links</h2>
            <table className="table">
              <thead>
                <tr><th>Link</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td><a rel="noopener noreferrer" target="_blank" href="https://peacewithgod.net/">Peace with God (Link)</a></td><td>Find peace with God</td></tr>
                <tr><td><a rel="noopener noreferrer" target="_blank" href="/media/Gospel-Steps-to-Peace-with-God.pdf">Peace with God (PDF)</a></td><td>Find peace with God</td></tr>
              </tbody>
            </table>
          </div> */}

          {/* <div className="item" key="Left">
            <h2>Books</h2>
            <p>*This listing is provided as a service. FBC is not responsible for all the content of these books.</p>

            <h4>Christ Among Other gods</h4>
            <p>by Erwin Lutzer</p>
            <p>The next time someone claims all religions teach the same basic truths, how will you respond? Here's the factual support you need to defend the uniqueness of Christ and counter the claims of Buddah, Krishna, Zoroaster, and others. Easy to read, but rich in content.</p>

            <h4>The Compact Guide to World Religions</h4>
            <p>edited by Dean C. Halverson</p>
            <p>In today's diverse society, most Christians come face-to-face with believers in Islam, Buddhism, Hinduism, Taoism, Judaism, Secularism, or New Age. Now, more than ever, it's important to understand these belief systems! This easy-to-use handbook will give you the great insights.</p>

            <h4>Not By Chance: Learning to Trust a Sovereign God</h4>
            <p>by Layton Talbert</p>
            <p>Dr. Layton Talbert takes you on a journey through the Scriptures to trace the unmistakable outline of God's shadow on human events.</p>

            <h4>The Roots of Endurance: Invincible Perseverance in the Loves of John Newton, Charles Simeon, and William Wilberforce</h4>
            <p>by John Piper</p>
            <p>Based on a series of messages by Piper, "Roots of Endurance" presents a picture of three godly men who endured against the odds.</p>

            <h4>The Practice of Godliness</h4>
            <p>by Jerry Bridges</p>
            <p>What makes a Christian godly? Bridges examines what it means to grow in Christian character and helps us establish the foundation upon which that character is built.</p>

            <h4>Can Man Live Without God?</h4>
            <p>by Ravi Zacharias</p>

            <p>Ravi Zacharias shows how affirming the reality of God’s existence matters urgently in our everyday lives, and how your answers to the questions of God’s existence will impact your relationship with others, your commitment to integrity, your attitude toward morality, and your perception of truth.</p>
          </div> */}

          <div className="item" key="Right">
            <h2>Ministries</h2>
            <h3>Praise and Worship</h3>
            <div className="row links">
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 Update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>

            <h3>Brass Band</h3>
             <div className="row links">
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 Update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>
           
           

            
<h3>Song Stars</h3>
            <div className="row links">
              
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 Update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>

            <h3>Youth Ministry</h3>
            <div className="row links">
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 Update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>

            <h3>Men and Women Felloship</h3>
            <div className="row links">
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 Update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>
              
          </div>
        </div>
      </Page>
    )
  }
}

export default MinistriesSection;
