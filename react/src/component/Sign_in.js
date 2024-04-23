import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Comp from './Component';

function Sign_in() {
  const navigate = useNavigate();
  const [FullName, setFullname] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        FullName: FullName,
        Password: Password,
      });

      navigate("/Weatherforecast", { replace: true });

      // Handle the successful response
      console.log('User signed in successfully:', response.data);
    } catch (error) {
      // Handle the error
      console.error('Sign in failed:', error);
    //axios   
    //  .post('http://localhost:3000/Sign_in', formData)
    }
  };

  return (
    <div className="mypage">
      <div className="row no-gutters">
        <div className="col">
          <div className="left-section">
            <div className="card">
              <div className="container">
                <Comp />
                <form className="form" onSubmit={handleSubmit}>
                  <div className="logo2"></div>
                  <div className="logo1"></div>
                  <div className="sign">Sign in to your account to continue</div>
                  <input
                    type="text"
                    className="input"
                    name="FullName"
                    required
                    placeholder="Full Name"
                    value={FullName}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input-password"
                    name="Password"
                    required
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="linky">
                    Don't have an account? <a className="linkyy" href="/Sign_up">Sign Up</a>
                  </p>
                  <p className="linkf">
                    Forgot password? <a className="linkyy" href="/forgot">Forget password</a>
                  </p>
                  <div>
                    <button className="custom-button" type="submit">
                      <span className="button-text">Log In</span>
                    </button>
                  </div>
                </form>
              </div>
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

export default Sign_in;
