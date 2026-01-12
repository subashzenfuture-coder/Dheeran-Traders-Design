import React from "react";
import Logo from "../assets/images/logo.png";
import LoginImg from "../assets/images/login.png";

export const Login = () => {
  return (
    <div className="login_detail">
      <div>
        <div className="row gx-0 gy-4 justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="login_img">
              <h5 className="title">
                Welcome to <br /> the website
              </h5>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="login_left">
              <div className="login-box">
                <div className="header_logo mb-4">
                  <img src={Logo} />
                </div>
                <div className="card-body">
                  <h5 className="login_title">Welcome Back Signup Your Account</h5>
                  <form action="">
                    <div id="loginMessage"></div>
                    <div className="form-group mb-3">
                      <label for="loginUsername" className="form-label">
                        Username
                      </label>
                      <input type="text" className="form-control" id="loginUsername" name="loginUsername" placeholder="username" />
                    </div>
                    <div className="form-group mb-3">
                      <label for="loginPassword" className="form-label">
                        Password
                      </label>
                      <input type="password" className="form-control" id="loginPassword" name="loginPassword" placeholder="password" />
                    </div>
                    <button type="button" id="login" className="btn main-btn w-100">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
