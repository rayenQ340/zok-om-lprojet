import bee from '../assets/bee.png';
import '../styles/products.css'; 
import BIZ from '../assets/BIZ.png';
import honey from '../assets/honey.png';
import white from '../assets/white.png'
import desk from '../assets/desk.png';
import internet2 from '../assets/internet2.png';
import de from '../assets/de.png'
import tag1 from '../assets/1.png'
import gateway from '../assets/gateway.png';
import tag2 from '../assets/tag2.png';
import antenna from '../assets/antenna.png';
import tag3 from '../assets/tag3.png';
import net from '../assets/net.png';
import tag4 from '../assets/tag4.png'
const Products = () => {
  return (
    <div className='product-container'>
      <div className='bee'>
      <img src={bee} alt="bee"/>
      </div>
      <div className='gtext7'>HOW 
SmartBees 
WORKS !!!</div>
<div className='ptext7'>The system will wirelessly transmit health and threat status results to a cloud server, making data available to run prediction models and risk assessments, issuing warnings and producing historical analyses.
This will allow beekeepers, researchers and public authorities to be active participants in colony surveillance programmes.</div>
    <button className='bt'>Discover</button>
    <div className='BIZ'>
    <img src={BIZ} alt="BIZ"/>
    </div>
    <div className='honey'>
    <img src={honey} alt="honey"/>
    </div>
    <div className='desk'>
    <img src={desk} alt="desk"/>
    </div>
    
    <div className='white'>
    <img src={white} alt="white"/>
    <div className='black'></div>
    </div>
    <div className='internet2'>
    <img src={internet2} alt="internet2"/>
    </div>
    <div className='de'>
    <img src={de} alt="de"/>
    </div>
    <div className='tag1'>
      <img src={tag1} alt="tag1"></img>
    </div>
    <p className='texttag1'>SmartBees Equipped With Network</p>
    <div className='white1'>
    <img src={white} alt="white1"/>
    <div className='black1'></div>
    </div>
    <div className='gateway'>
    <img src={gateway} alt="gateway"/>
    </div>
    <div className='tag2'>
      <img src={tag2} alt="tag2"></img>
    </div>
    <p className='tag2text'>SmartBees Gateway</p>
    <div className='white2'>
    <img src={white} alt="white2"/>
    <div className='black2'></div>
    </div>
    <div className='antenna'>
      <img src={antenna} alt="antenna"></img>
    </div>
    <div className='tag3'>
      <img src={tag3} alt="tag3"></img>
    </div>
    <p className='tag3text'> Data Transmission</p>
    <div className='white3'>
    <img src={white} alt="white3"/>
    <div className='black3'></div>
    </div>
    <div className='net'>
      <img src={net} alt="net"></img>
    </div>
    <div className='tag4'>
      <img src={tag4} alt="tag4"></img>
    </div>
    <p className='tag4text'>Cloud Server and Management server</p>
    <div className='sectio'>
      <p className='texto'>Monitor your bee’s health in real time
and get a delicious honey ,we’ve got you covered.</p>
    </div>
    </div>
    
  );
}

export default Products;
