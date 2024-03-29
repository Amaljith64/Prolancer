import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDebounce } from '../customHooks/useDebounce'
import ClientContext from '../context/ClientContext'


function SignupPage() {
  let { userSignup, googleSignin } = useContext(AuthContext);
  let {searchloading,setSearchLoading,checkUSername,message} = useContext(ClientContext)
  const [username, setUsername] = useState('')
  console.log(message,'its from my gaa')

  console.log(username,'userrrrr')
  if (username === ''){
	setSearchLoading(false)
}

const searchusername = useDebounce(username, 2000)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  function handleCallbackResponse(response) {
    googleSignin(response);
  }


  const registerOptions = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required.",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is not valid.",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  useEffect(() => {
    /* global google */
    google?.accounts.id.initialize({
      client_id:
        "343457976454-bvvnulla58ojkknd3l9jtb5kd10aq8ns.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google?.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    })
	if (username != ""){
	checkUSername(username)
	}
  },
  
  
 
  [searchusername]);
  return (
    <div>
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Register</h2>

              <nav id="breadcrumbs" className="dark"></nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-xl-5 offset-xl-3 ">
            <div className="login-register-page ">
              <div className="welcome-text">
                <h3 style={{ fontsize: "26px" }}>Let's create your account!</h3>
                <span>
                  Already have an account? <Link to="/login">Log In!</Link>
                </span>
              </div>

              <form
                onSubmit={handleSubmit(userSignup)}
                id="register-account-form"
              >
                <div class="keyword-input-container">
				<input
                    style={{ margin: "0", paddingLeft: "20px" }}
                    type="text"
                    className="input-text with-border"
                    name="name"
                    placeholder="Enter Username"
					onChange={(e) =>{
						setUsername(e.target.value)
						setSearchLoading(true)
					}
					}
                    required
                    
                  />
				  <small>
                    <div
                      style={{ height: "27px", color: "red" }}
                      className="text-danger"
                    >
                      {message.data}
                    </div>
                  </small>
				  {searchloading === true ? <div
                    className="loadingspinner keyword-input-button "
                    style={{ backgroundColor: "#fffff4" }}
                  ></div>  :
				  null}

                  
                </div>
                
                <div className="input-with-icon-left">
                  <input
                    type="text"
                    style={{ margin: "0", paddingLeft: "20px" }}
                    className="input-text with-border"
                    name="email"
                    placeholder="Email Address"
                    required
                    {...register("email", registerOptions.email)}
                  />
                  <small>
                    <div
                      style={{ height: "27px", color: "red" }}
                      className="text-danger"
                    >
                      {errors?.email && errors.email.message}
                    </div>
                  </small>
                </div>

                <div
                  className="input-with-icon-left"
                  title="Should be at least 8 characters long"
                  data-tippy-placement="bottom"
                >
                  <input
                    type="password"
                    style={{ margin: "0", paddingLeft: "20px" }}
                    className="input-text with-border"
                    name="password"
                    placeholder="Password"
                    required
                    {...register("password", registerOptions.password)}
                  />
                  <small>
                    <div
                      style={{ height: "27px", color: "red" }}
                      className="text-danger"
                    >
                      {errors?.password && errors.password.message}
                    </div>
                  </small>
                </div>

                {/* <div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password2" id="password-repeat-register" placeholder="Repeat Password" required/>
					</div> */}
                <button
                  className="button full-width button-sliding-icon ripple-effect margin-top-10"
                  type="submit"
                >
                  Register{" "}
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </button>
                <div className="social-login-separator">
                  <span>or</span>
                </div>
                <div
                  className="social-login-buttons"
                  style={{ justifyContent: "center" }}
                >
                  <div id="signInDiv"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
