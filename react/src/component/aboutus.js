import image2 from '../assets/Icon2.png';
import image3 from '../assets/icon3.png';
import speaker from '../assets/speaker.png';
import Vector99 from '../assets/Vector99.png';
import image1 from '../assets/Icon1.png';

import monitor from '../assets/monitor.png';
import internet from '../assets/internet.png';
const AboutUs = () => {
  return (
    <div className="page-container">
      <div id="features">
        <div className="image-container1">
          <img src={image1} alt="Image 1" />
          <p className="gtext">Unlimited Access</p>
          <p className="ptext">One click, One subscription</p>
        </div>
        <div className="image-container2">
          <img src={image2} alt="Image 2" />
          <p className="gtext1">SmartBees</p>
          <p className="ptext1">Have access to everything happening with your beehives in real time.</p>
        </div>
        <div className="image-container3">
          <img src={image3} alt="Image 3" />
          <p className="gtext2">Control Anywhere</p>
          <p className="ptext2">Designed for beekeepers Switch between your computer, tablet, or mobile device.</p>
        </div>
      </div>
      <div className='part'></div>
      <div className='audio'>
      <div className='circle0'>
      <img src={speaker} className='speaker' alt="Speaker"></img>
     </div>
     <p className='gtext3' >Audio Playback</p>
     <p className='ptext3'>Listen to your bees sound, wherever you are with the latest developments in IoT.
</p>
      </div>
      <div className='audio1'>
      <div className='circle1'>
      <img src={Vector99} className='vector99' alt="vector99"></img>
     </div>
     <p className='gtext4' >Data Visualization</p>
     <p className='ptext4'>Prescient calculations dependent on:
Temperature, Humidity, Sound Analysis
through detailed historic diagrams.
</p>
      </div>
      <div className='audio2'>
      <div className='circle2'>
      <img src={monitor} className='monitor' alt="monitor"></img>
     </div>
     <p className='gtext5' >Live Data</p>
     <p className='ptext5'>Get your Data on computer, tablet, or mobile device.
</p>
      </div>
      <div className='audio3'>
      <div className='circle3'>
      <img src={internet} className='internet' alt="internet"></img>
     </div>
     <p className='gtext6' >Easily connects</p>
     <p className='ptext6'>Connect to your Home Wi-Fi 
</p>
      </div>
      <div className='section'>
        <div className='text1'>Listen to your bees.
Explore our new beehive.
Become a part of the solution !</div>
<p className='textt'>Bees play a huge role in maintaining the balance of nature. Food production, biodiversity and environmental sustainability all depend on them. Farmalabs has developed a remote digital diagnostic and monitoring system for beekeeping. This enables beekeepers to breed more and healthier bees.</p>
      <button className='bb'>Discover</button>
      </div>
</div>
  );
};

export default AboutUs;
