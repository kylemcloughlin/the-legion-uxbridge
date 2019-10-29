import React from 'react';
import legion from './legion-outside.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hall01 from './hall01.jpeg';
import hall02 from './hall02.jpg';
import hall03 from './hall03.jpg';
import emailImg from './email-wht.jpg'
import img2 from './email-blk.jpg'
class Home extends React.Component {
  email = () => {
    window.location.href = `mailto: legion170@powergate.ca`
  }
  render() {
    return (
    <div className="home-container">
       <div className="welcome-pos">
        <h1 className="welcome">Welcome to the Uxbridge Legion.</h1>
          <p className="welcome-div">Branch 170 recieved its charter in 1930! Active for almost 85 years, the members have met in various 
          places around town including the old post office, and the old marketplace, and finally in the late 40's 
          establishing the location that continues to this day. The original building burned down in 1953, and was 
          rebuilt. It has since had several renovations. It is notable that most of the work on the legion has been done 
        by volunteers.</p>
      </div>
      {/* <img className="photo" src={legion}/> */}
         {/* <div className="photo"> */}
          <Carousel className="photo" showThumbs={false} infiniteLoop={true} showStatus={false} autoplay={true}>
              <div>
                <img src={hall01} />
              </div>
              <div>
                <img src={hall02}/>
              </div>
              <div>
                <img src={hall03}/>
              </div>
            </Carousel>
          {/* </div>   */}
       
        <div className='mission-pos' id="mission-div">
        <h3 className="mission-h2">Our MISSION: </h3>
          <p >Serving veterans and their dependents, promoting Remembrance, and acting in the service of Canada and its communities.</p>
      </div>
      <div className='facebook-container'> 
          <a href="https://www.facebook.com/Uxbridge-Legion-Branch-170-121692301237944/" target="_blank" class="effect">
        <label className='circle'>f</label>
          </a>
        <span> connect with us on facebook</span>
      </div>
      <div className='pipes-container' >
          <img className='email' src={emailImg} onClick={this.email} onMouseOver={e => (e.currentTarget.src = img2)} onMouseOut={e => (e.currentTarget.src = emailImg)} />
          <span>Email</span>
      </div>
    </div>
    )
  }
}
export default Home;