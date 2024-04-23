import React from 'react';
import Comp from './Component';
import logo4 from '../images/logo.png';
function Forgot_password() {
  return (
    <div className='mypage'>
      <div className="row no-gutters">
        <div className='col'>
          <div className="left-section"></div>
            <div className='card'>
            <div className="container">
              <Comp />
              <form className="form">
              <div className='logo4'></div>
              <div className='logo3'></div>
                <div className='sign3'>Ok let's fetch your login details</div>
                <input name="Email Address" className='inputF' required placeholder='Email Adress' />
                <p className='linkee'>
                Already have an account?
                  <a className='linkyy' href="Sign_up">Back to Sign Up</a>
                </p>
                <button className="custom-button3">
                      <span className="button-text3">Proceed</span>
                    </button>
              </form>
            </div>
            </div>
        </div>
        <div className="col">
          <div className="right-section">
            <div className="login" id="lo">
              Log In
            </div>
            <br />
            <div className="login" id="si">
              Sign Up
            </div>
            <br />
            <div className="login" id="fp">
              Forgot password?
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgot_password