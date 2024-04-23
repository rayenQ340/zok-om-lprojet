import {Link } from 'react-router-dom';
import log from '../images/log.png';
import '../styles/sidenav.css';
import avatar from '../images/avatar.png';
import oval from '../images/oval.png';
import dash from '../images/dash.png'
import hive from '../images/hive.png'
import conn from '../images/conn.png'
import chat from '../images/chat.png'
import ana from '../images/ana.png'
import task from '../images/task.png'
import email from '../images/email.png'
import email1 from '../images/email1.png';
import cha from '../images/cha.png'
import settings from '../images/settings.png'
import toggle_sidebar from '../images/toggle_sidebar.png';

function SideNav() {
  return (
    <div className="sidenavbg">
      <div className="log">
        <img src={log} alt="Log" />
      </div>
      <div className="divider"></div>
      <div className="avata">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="oval">
          <img src={oval} alt="oval" className="oval" />
        </div>
        <div className="TextMedium14Black">
          <div className="UserFarmalabs">User Farmalabs</div>
          <div className="Frame1">user_farma@gmail.com</div>
        </div>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/admin/dashboard" className='dashboardd'>Dashboard </Link>
          <div className='dash'>
          <img src={dash} alt="dash"  className='dash' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/hiveyards" className='hiveyards'>HiveYards </Link>
          <div className='hive'>
          <img src={hive} alt="hive"  className='hive' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/apiaries" className='apiaries'>Apiaries </Link>
          <div className='conn'>
          <img src={conn} alt="conn"  className='conn' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/treatments" className='treatments'>Treatments </Link>
          <div className='conn'>
          <img src={conn} alt="conn"  className='conn' />
          </div>
       

        </li>
        <li>
        <Link to="/admin/wheatherforcast" className='wheather'>
  <span className="link-text">Weather Forecast</span>
</Link>
<div className='chat'>
  <img src={chat} alt="chat" className='chat-icon' />
</div>
</li>
<li>
          <Link to="/admin/analytics" className='analytics'>Analytics </Link>
          <div className='ana'>
          <img src={ana} alt="ana"  className='ana' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/task" className='task'>task </Link>
          <div className='tas'>
          <img src={task} alt="tas"  className='tas' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/email" className='email'>inspectations </Link>
          <div className='ema'>
          <img src={email} alt="ema"  className='ema' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/contact" className='contact'>contact </Link>
          <div className='cont'>
          <img src={email1} alt="cont"  className='cont' />
          </div>
       

        </li>
        <li>
          <Link to="/admin/chatt" className='cha'>chat </Link>
          <div className='ch'>
          <img src={cha} alt="ch"  className='ch' />
          </div>
       

        </li>
      </ul>
      <div className="divider"></div>
      <ul>
      <li className='navv'>
          <Link to="/admin/settings" className='set'>settings </Link>
          <div className='sett'>
          <img src={settings} alt="sett"  className='sett' />
          </div>
       

        </li>
          <img src={toggle_sidebar} alt="tog"  className='tog' />
         
       

      </ul>

    </div>
  );
}

export default SideNav;

