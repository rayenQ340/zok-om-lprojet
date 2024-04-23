import {  NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/navbar.css';
import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


function scrollToTop() {
  scroll.scrollToTop();
}

function Navbar() {
  const handleClick = () => {
    scroll.scrollMore(500); // Adjust the value to scroll more or less
  };
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  return (
    <div className="navbar">
      <div className="overlay">
        <div className="leftside">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div className="rightside">
          <NavLink to="/" id="h" onClick={scrollToTop}>
            Home
          </NavLink>
          <NavLink to="/products" id="pro" onClick={handleClick}>
            Products
          </NavLink>
          <NavLink to="/pricing" id="pri" onClick={handleClick}>
            Pricing
          </NavLink>
          <NavLink to="/aboutus" id="as" onClick={handleClick}>
            About Us
          </NavLink>
          <NavLink to="/smartbees" id="sb" onClick={handleClick}>
            Smart Bees
          </NavLink>
          <div className="button-container">
            <NavLink to="/Sign_up" className="nav-button" >
              Sign Up
            </NavLink>
            <NavLink to="/Sign_in" className="nav-button" >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;