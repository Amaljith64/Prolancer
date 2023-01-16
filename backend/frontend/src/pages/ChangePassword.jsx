import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const Navigate = useNavigate();

  let { user, loginUser, googleSignin,changePassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const registerOptions = {
    password1: {
      required: "Password is required",
      minLength: {
        value: 5,
        message: "Password must have at least 5 characters",
      },
    },
    password2: {
      required: "Password is required",

    },
  };

  return (
    <div>
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Change Password</h2>
              <nav id="breadcrumbs" className="dark"></nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page">
              <div className="welcome-text">
                <h3>Enter Your New Password</h3>
              </div>
              <form onSubmit={handleSubmit(changePassword)} id="login-form">
                
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    style={{ margin: "0" }}
                    type="password"
                    className="input-text with-border"
                    name="password1"
                    id="password1"
                    placeholder="Password"
                    required
                    {...register("password1", registerOptions.password1)}
                  />
                  <small>
                    <div
                      style={{ height: "27px", color: "red" }}
                      className="text-danger"
                    >
                      {errors?.password1 && errors.password1.message}
                    </div>
                  </small>
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    style={{ margin: "0" }}
                    type="password"
                    className="input-text with-border"
                    name="password2"
                    id="password2"
                    placeholder="Confirm Password"
                    required
                    {...register("password2", registerOptions.password2)}
                  />
                  <small>
                    <div
                      style={{ height: "27px", color: "red" }}
                      className="text-danger"
                    >
                      {errors?.password2 && errors.password2.message}
                    </div>
                  </small>
                </div>
                {/* <Link className="forgot-password">Forgot Password?</Link> */}
              </form>
              <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="submit"
                form="login-form"
              >
                Change Password <i className="icon-material-outline-arrow-right-alt"></i>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;