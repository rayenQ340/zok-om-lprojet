import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Comp from "./Component";
import "../App.css";

function Sign_up() {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    axios
      .post("http://localhost:5000/auth/add_user", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Redirect to the login page or perform any other necessary action
        navigate("/Sign_in", { replace: true });
        // Handle the successful response
        console.log("User registered successfully:", response.data);
      })
      .catch((error) => {
        // Handle the error
        console.log("Registration failed:", error);
        // axios
        //   .post('http://localhost:5000/auth/add_user', formData)
      });
  };
  return (
    <div className="mypage">
      <div className="row no-gutters">
        <div className="col">
          <div className="left-section">
            <div className="card">
              <div className="container">
                <div className="logo2"></div>
                <div className="logo1"></div>
                <Comp />
                <form className="form" onSubmit={handleSubmit} action="Sign_in">
                  <div className="sign">Please create a new account here</div>
                  <input
                    name="FullName"
                    className="input1"
                    required
                    placeholder="Full Name"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    name="Email"
                    className="input2"
                    required
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    name="Region"
                    className="input3"
                    autoComplete="off"
                    required
                    placeholder="Region"
                  />
                  <input
                    name="PhoneNumber"
                    className="input4"
                    required
                    placeholder="Phone Number"
                  />
                  <input
                    type="password"
                    className="input5"
                    name="Password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="linke">
                    Already have an account?
                    <a className="linkyy" href="/Sign_in">
                      Log In
                    </a>
                  </p>
                  <button className="custom-button2" type="submit">
                    <span className="button-text">Sign Up</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="right-section2">
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
    </div>
  );
}

export default Sign_up;
