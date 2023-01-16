import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {
  UserProfile,
} from "../actions/postActions";
import useAxios from '../utils/useAxios'
import logo from '../assets/logo.png'

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  let { user, logoutUser, authTokens } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const [reload, setReload] = useState(false);
  const Swal = require("sweetalert2");

  const userdetails = useSelector((state) => state.userProfile);
  const { userprofile, userprofileerror } = userdetails;

  console.log(userprofile,'uuuuuuuuuuuu')

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggleClass = () => {
    setActive(!isActive);
  };

  let redirectt = (e) => {
    e.preventDefault();
    if (userprofile?.is_freelancer === true) {
      Navigate("/freelancer");
    } else {
      Navigate("/");
      console.log("else worked");
    }
  }

  let sentrequest = () => {
    Swal.fire({
      title: "Are you sure",
      text: "You have filled all details in your Profile",

      icon: "warning",
      showCancelButton: "true",
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES,Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`/client/freelancerrequest/`, {
          requested_user: user?.user_id,
        });
        toast.success("Your request has been sent.");
      }
    });
  };

  let api = useAxios()

  let sentotp = () => {

    axios.put("api/sentotp/",{
        'userid': user.user_id
    })
  };
  const [value, setValue] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setValue(value);
  };


  let verify_otp = (e) => {
    e.preventDefault();
    console.log('verify called')
    axios.patch('api/verifyotp/',{
      'userid' : user.user_id,
      'otp' : e.target.otp.value
    }).then((response) => {
      console.log(response,'from then')
      setModalShow(false)
      toast.success(response.data.detail)
      setReload(!reload)
      
    }).catch((error)=> {
      console.log(error,'from catch')
      console.log(error.response.data,'frommmmmmmmfmmm catch')
      setModalShow(false)
      toast.error(error.response.data.detail)
    })
  }
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
    sentotp();
  };

  let getNotes = async() =>{

    await api.get('/api')

    
}

  useEffect(() => {
 
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);


  useEffect(() => {
    getNotes()
    dispatch(UserProfile(user?.user_id))
 
  }, [reload])
  

  return (
    <div>
      <header
        id="header-container"
        className="fullwidth dashboard-header not-sticky"
      >
        {userprofile?.is_email_verified === false ? (
          <div
            className="notification warning"
            style={{ margin: 0, padding: "5px", display: "flex" }}
          >
            &ensp;
            <i
              className="icon-line-awesome-warning"
              style={{ marginTop: "4px" }}
            ></i>
            <p>
              {user?.username}, you need to activate your account &ensp;(
              {userprofile?.email})
            </p>
            &emsp;
            <div className="countdown-text">
             
                <Link onClick={() => {
                            setModalShow(true)
                            resendOTP();
                    }}>Click Here</Link>
             
            </div>
            <a className="close" href="#"></a>
          </div>
        ) : null}
        <div id="header">
          <Modal show={modalShow}>
            <div
              id="small-dialog"
              className="zoom-anim-dialog mfp-hide dialog-with-tabs"
            ></div>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <ul className="popup-tabs-nav">
                  <Button
                    style={{ float: "right", padding: "21px" }}
                    onClick={() => setModalShow(false)}
                  >
                    Close
                  </Button>
                </ul>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="popup-tabs-container">
                <div className="welcome-text">
                  <h3>Enter OTP </h3>
                </div>
                <form onSubmit={verify_otp} >
                <div className="container">
                   
                  <input
                    type="phone"
                    className="input-text with-border"
                    name="otp"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter Your Otp"
                    required
                  />
                   <label>{seconds > 0 || minutes > 0 ? (
                <p>
                  Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                <Link onClick={() => {setModalShow(true)
                    resendOTP()}}>Resent Email</Link>
              )}    </label>
                  <button
                    type="submit"
                    className="button full-width button-sliding-icon ripple-effect margin-top-10 margin-bottom-20"
              
                  >
                    Verify{" "}
                    <i className="icon-material-outline-arrow-right-alt"></i>
                  </button>
                </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
          <div className="container">
            <div className="left-side">
              <div id="logo" style={{ width : '339px'}}>
                <Link onClick={redirectt}>
                  <img src={logo} alt="" />
                </Link>
              </div>

              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <Link onClick={redirectt}> Home</Link>
                  </li>

                  {user?.is_freelancer ? (
                    <li>
                      <Link to="/list_job">View Jobs</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/list_service">View Services </Link>
                    </li>
                  )}

                  {user?.is_freelancer ? (
                    <li>
                      <Link to="/post_service">Post Service</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/freelancerprofile">View Freelancers </Link>
                    </li>
                  )}
                  {user?.is_freelancer ? (
                    null
                  ) : (
                    <li>
                      <Link to="/myorders">My Orders</Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>

            <div className="right-side">
              <div className="header-widget hide-on-mobile">
                {/* <div className="header-notifications">
                  <div className="header-notifications-trigger">
                    <Link to="/upcomming">
                      <i className="icon-feather-bell"></i>
                      <span>4</span>
                    </Link>
                  </div>
                </div> */}

                <div className="header-notifications">
                  <div className="header-notifications-trigger">
                    <Link to="/chat">
                      <i className="icon-feather-message-circle"></i>
                      
                    </Link>
                  </div>
                </div>
              </div>

              <div className="header-widget" onClick={toggleClass}>
                {user ? (
                  <div
                    className={
                      isActive
                        ? "header-notifications user-menu active"
                        : "header-notifications user-menu"
                    }
                  >
                    <div className="header-notifications-trigger">
                      <Link to="">
                        <div className="user-avatar status-online">
                          <img src={userprofile?.profile_photo} alt="" />
                        </div>
                      </Link>
                    </div>

                    <div className="header-notifications-dropdown">
                      <div className="user-status">
                        <div className="user-details">
                          <Link to="/userprofile">
                            <div className="user-avatar status">
                              <img
                                src={userprofile?.profile_photo}
                                style={{ height: "-webkit-fill-available" }}
                                alt=""
                              />
                            </div>
                          </Link>
                          <div className="user-name">
                            {user && (
                              <h3>
                                Hello <strong> {userprofile?.username}</strong>
                              </h3>
                            )}
                            {userprofile?.is_freelancer === true ? (
                              <span>Freelancer</span>
                            ) : (
                              <span>User</span>
                            )}
                            <span>
                              <strong>
                                {userprofile?.active_membership == null
                                  ? "No Membership"
                                  : userprofile?.active_membership}
                              </strong>
                            </span>
                          </div>
                        </div>
                        <div className="margin-top-30"></div>
                        {user?.is_freelancer ? (
                          <div className="" id="snackbar-user-status">
                            <Link
                              to="/dashboard"
                              className="button full-width "
                            >
                              Dashboard
                            </Link>
                          </div>
                        ) : (
                          <>
                          <div className="" id="snackbar-user-status">
                            <Link
                            onClick={() => {
                              {userprofile.is_email_verified === false ? toast.error('Verify your account')
                            :
                            sentrequest();
                            }
                            }}
                              
                              className="button full-width "
                            >
                              Become Freelancer
                            </Link>
                          </div>
                         
                          <div  className="" id="snackbar-user-status">
                            <Link to='/myorders' style={{backgroundColor : "black"}}                     
                              className="button full-width margin-top-10 "
                            >
                              My Orders
                            </Link>
                          </div>
                          </>
                        )}
                      </div>

                      <ul
                        className="user-menu-small-nav"
                        style={{ float: "right", marginRight: "10px" }}
                      >
                        {user ? (
                          <li onClick={logoutUser}>
                            <i className="icon-material-outline-power-settings-new"></i>{" "}
                            Logout
                          </li>
                        ) : (
                          <li>
                            {" "}
                            <Link to="/login">
                              <i className="icon-material-outline-power-settings-new"></i>{" "}
                              Login
                            </Link>{" "}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="header-notifications">
                    <div className="header-notifications-trigger">
                      <Link to="/login">
                        <i className="icon-line-awesome-sign-in"></i>Signin
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;