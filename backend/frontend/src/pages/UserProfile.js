import React from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { produce } from "immer";
import { UserProfile } from "../actions/postActions";
import { Navigate } from 'react-router-dom';

class UserProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedModal: null,
      value: "",
      details: this.props.userdetails,
      minutes: 0,
      seconds: 0,
      otpvalue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.updateEducationSubmit = this.updateEducationSubmit.bind(this);
  }

  onInputChange = (event) => {
    this.setState(
      produce(this.state.user, (draftState) => {
        draftState.user = {
          name: event.target.value,
        };
      })
    );
  };

  onSubmitUser = () => {
    this.setState(
      produce((draftState) => {
        draftState.users.push(this.state.user);
        draftState.user = {
          name: "",
        };
      })
    );
  };

  openModal = (id) => {
    this.setState({ openedModal: id });
  };
  closeModal = () => {
    this.setState({ openedModal: null });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEducationSubmit = (event) => {
    event.preventDefault();
    toast.success("New Education Added");
    axios.post(`api/education/`, {
      user: this.props.userdetails.id,
      university: event.target.university.value,
      department: event.target.department.value,
      remark: event.target.remark.value,
      start_date: event.target.start_date.value,
      end_date: event.target.end_date.value,
    });
    this.props.SetUpdate(this.props.userdetails.id);
  };
  updateEducationSubmit = (event) => {
    event.preventDefault();
    toast.success("Education Updated");
    axios.post(`api/editeducation/${this.openedModal}`, {
      user: "user",
      description: event.target.description.value,
      university: event.target.university.value,
      department: event.target.department.value,
      remark: event.target.remark.value,
      start_date: event.target.start_date.value,
      end_date: event.target.end_date.value,
    });
  };

  sentotp = () => {
    axios.put("api/sentotp/", {
      userid: this.props.userdetails.id,
    });
  };
  handleOtp = (event) => {
    event.preventDefault();
    axios.post(`api/passwordotpverify/`, {
      userid: this.props.userdetails.id,
      otp: event.target.otpvalue.value,
    });
  };

  verify_otp = (e) => {
    console.log('called otp passs')
    e.preventDefault();
    axios
      .patch("api/passwordotpverify/", {
        userid: this.props.userdetails.id,
        otp: e.target.otpvalue.value,
      })
      .then((response) => {
        console.log(response, "from then");
        this.closeModal();
        toast.success(response.data?.detail);
        // <Navigate to="/dashboard" replace={true} />
        // this.props.navigate('changepassword')
        // this.props.history.push('/changepassword')
        // this.props.navigation.navigate('/changepassword');
        // return(
        // <Navigate to="/changepassword" />
        // )
        window.location.replace('/changepassword')
        // this.navigate("/changepassword")

        
      })
      .catch((error) => {
        console.log(error, "from catch");
        console.log(error.response?.data, "frommmmmmmmfmmm catch");
        this.closeModal();
        toast.error(error.response?.data.detail);
      });
  };
  resendOTP = () => {
    this.setState({ minutes: 0, seconds: 30 });
    this.sentotp();
  };

  render() {
    const { userdetails, SetUpdate } = this.props;
    console.log(userdetails, "its profile");

    return (
      <div>
        <Header />
        <div className="margin-top-80"></div>
        <div
          className="single-page-header freelancer-header"
          style={{ marginBottom: "0px" }}
          data-background-image="images/single-freelancer.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-page-header-inner">
                  <div className="left-side">
                    <div className="header-image freelancer-avatar">
                      <img
                        src={userdetails?.profile_photo}
                        style={{ height: "-webkit-fill-available" }}
                        alt=""
                      />
                      <button
                        onClick={() => this.openModal("image")}
                        className="btnn"
                      >
                        <i className="icon-feather-plus"></i>
                      </button>

                      <Modal
                        show={
                          this.closeModal && this.state.openedModal === "image"
                        }
                      >
                        <div
                          id="small-dialog"
                          className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                        ></div>
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            <ul className="popup-tabs-nav">
                              <li>
                                <Link to="#tab">Add</Link>
                              </li>
                              <Button
                                style={{
                                  float: "right",
                                  padding: "21px",
                                }}
                                onClick={this.closeModal}
                              >
                                Close
                              </Button>
                            </ul>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="popup-tabs-container">
                            <div className="welcome-text">
                              <h3>Add Image</h3>
                            </div>
                            <div
                              className="popup-tab-content"
                              id="tab"
                              style={{ textAlignLast: "center" }}
                            >
                              <img
                                src={userdetails?.profile_photo}
                                style={{ height: "-webkit-fill-available" }}
                                alt=""
                              />
                              <form>
                                <input type="file" />

                                <button
                                  className="button big ripple-effect margin-top-20 margin-bottom-20 "
                                  style={{ float: "right" }}
                                >
                                  Save
                                </button>
                              </form>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div className="header-details">
                      <h3>
                        {userdetails?.username}{" "}
                        <span>iOS Expert + Node Dev</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            <div className="dashboard-headline">
              <h3>Your Profile</h3>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="dashboard-box margin-top-0">
                  <div
                    className="headline"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3
                      style={{
                        alignSelf: "center",
                        padding: "16px",
                        paddingLeft: "0",
                      }}
                    >
                      <i className="icon-feather-user"></i> User Profile
                    </h3>
                    <Link
                      style={{
                        alignSelf: "center",
                        padding: "16px",
                        paddingLeft: "0",
                      }}
                      onClick={() => {
                        this.openModal("changepassword");
                        // this.resendOTP();
                      }}
                    >
                      <i className="icon-line-awesome-key"></i> Change Password
                    </Link>
                    <Modal
                      show={
                        this.closeModal &&
                        this.state.openedModal === "changepassword"
                      }
                    >
                      <div
                        id="small-dialog"
                        className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                      ></div>
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          <ul className="popup-tabs-nav">
                            <li>
                              <Link to="#tab">Add</Link>
                            </li>
                            <Button
                              style={{
                                float: "right",
                                padding: "21px",
                              }}
                              onClick={this.closeModal}
                            >
                              Close
                            </Button>
                          </ul>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="popup-tabs-container">
                          <div className="welcome-text">
                            <h3>Edit Description</h3>
                          </div>
                          <div className="popup-tab-content" id="tab">
                            <form onSubmit={this.verify_otp}>
                              <input
                                name="otpvalue"
                                onChange={this.handleChange}
                              />
                              <label>
                                {this.seconds > 0 || this.minutes > 0 ? (
                                  <p>
                                    Time Remaining:{" "}
                                    {this.minutes < 10
                                      ? `0${this.minutes}`
                                      : this.minutes}
                                    :
                                    {this.seconds < 10
                                      ? `0${this.seconds}`
                                      : this.seconds}
                                  </p>
                                ) : (
                                  <Link
                                    onClick={() => {
                                      
                                      this.resendOTP();
                                    }}
                                  >
                                    Resent Email
                                  </Link>
                                )}{" "}
                              </label>
                              <button
                              type="submit"
                                className="button big ripple-effect margin-top-20 margin-bottom-20 "
                                style={{ float: "right" }}
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div className="content">
                    <ul className="dashboard-box-list">
                      <li>
                        <div className="boxed-list-item">
                          <div
                            className="item-content"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h4>Description</h4>
                              {userdetails?.about === "" ? (
                                <Link
                                  style={{ marginRight: "5px" }}
                                  onClick={() => this.openModal("description")}
                                >
                                  <i className="icon-material-outline-add">
                                    {" "}
                                    Add Description
                                  </i>
                                </Link>
                              ) : (
                                <>
                                  <Link
                                    style={{ marginRight: "5px" }}
                                    onClick={() =>
                                      this.openModal("description")
                                    }
                                  >
                                    <i className="icon-feather-edit"></i>
                                  </Link>
                                  <div className="item-description">
                                    <p>
                                      Great clarity in specification and
                                      communication. I got payment really fast.
                                      Really recommend this employer for his
                                      professionalism. I will work for him again
                                      with pleasure.
                                    </p>
                                  </div>
                                </>
                              )}
                              <Modal
                                show={
                                  this.closeModal &&
                                  this.state.openedModal === "description"
                                }
                              >
                                <div
                                  id="small-dialog"
                                  className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                                ></div>
                                <Modal.Header closeButton>
                                  <Modal.Title id="contained-modal-title-vcenter">
                                    <ul className="popup-tabs-nav">
                                      <li>
                                        <Link to="#tab">Add</Link>
                                      </li>
                                      <Button
                                        style={{
                                          float: "right",
                                          padding: "21px",
                                        }}
                                        onClick={this.closeModal}
                                      >
                                        Close
                                      </Button>
                                    </ul>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="popup-tabs-container">
                                    <div className="welcome-text">
                                      <h3>Edit Description</h3>
                                    </div>
                                    <div className="popup-tab-content" id="tab">
                                      <form>
                                        <textarea
                                          name="comment-content"
                                          cols="30"
                                          rows="5"
                                          placeholder="Comment"
                                        ></textarea>
                                        <button
                                          className="button big ripple-effect margin-top-20 margin-bottom-20 "
                                          style={{ float: "right" }}
                                        >
                                          Save
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="boxed-list-item">
                          <div
                            className="item-content "
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h4>Education</h4>
                              <Link
                                style={{ marginRight: "5px" }}
                                onClick={() => this.openModal("addedu")}
                              >
                                <i className="icon-material-outline-add">
                                  {" "}
                                  Add Education
                                </i>
                              </Link>

                              <Modal
                                show={
                                  this.closeModal &&
                                  this.state.openedModal === "addedu"
                                }
                              >
                                <div
                                  id="small-dialog"
                                  className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                                ></div>
                                <Modal.Header closeButton>
                                  <Modal.Title id="contained-modal-title-vcenter">
                                    <ul className="popup-tabs-nav">
                                      <li>
                                        <Link to="#tab">Add</Link>
                                      </li>
                                      <Button
                                        style={{
                                          float: "right",
                                          padding: "21px",
                                        }}
                                        onClick={this.closeModal}
                                      >
                                        Close
                                      </Button>
                                    </ul>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="popup-tabs-container">
                                    <div className="welcome-text">
                                      <h3>Add Education</h3>
                                    </div>
                                    <div className="popup-tab-content" id="tab">
                                      <form
                                        onSubmit={this.handleEducationSubmit}
                                      >
                                        <div className="row">
                                          <div className="col-xl-12">
                                            <div className="input-with-icon-left no-border">
                                              <i className="icon-line-awesome-university"></i>
                                              <input
                                                type="text"
                                                className="input-text"
                                                name="university"
                                                onChange={this.handleChange}
                                                placeholder="University"
                                                required
                                              />
                                            </div>
                                          </div>
                                          <div className="col-xl-6">
                                            <label>From date</label>

                                            <div className="input-with-icon-left no-border">
                                              <i className="icon-line-awesome-calendar"></i>
                                              <input
                                                type="date"
                                                className="input-text"
                                                name="start_date"
                                                onChange={this.handleChange}
                                                placeholder="From Year"
                                                required
                                              />
                                            </div>
                                          </div>
                                          <div className="col-xl-6">
                                            <label>Till date</label>
                                            <div className="input-with-icon-left no-border">
                                              <i className="icon-line-awesome-calendar"></i>
                                              <input
                                                type="date"
                                                className="input-text"
                                                name="end_date"
                                                onChange={this.handleChange}
                                                placeholder="Till Year"
                                                required
                                              />
                                            </div>
                                          </div>
                                          <div className="col-xl-12">
                                            <div className="">
                                              <input
                                                type="text"
                                                className="input-text"
                                                name="department"
                                                onChange={this.handleChange}
                                                placeholder="Department"
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <textarea
                                          name="remark"
                                          onChange={this.handleChange}
                                          cols="30"
                                          rows="5"
                                          placeholder="Comment"
                                        ></textarea>

                                        <button
                                          className="button big ripple-effect margin-top-20 margin-bottom-20 "
                                          style={{ float: "right" }}
                                          onClick={this.closeModal}
                                        >
                                          Save
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                            {userdetails?.educations === undefined ? (
                              <h4> Empty</h4>
                            ) : (
                              <div>
                                {userdetails?.educations.map((data, id) => {
                                  return (
                                    <div
                                      key={data.id}
                                      className="item-description"
                                    >
                                      <div
                                        className="boxed-list-item"
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div className="item-content">
                                          <span
                                            className="company-not-rated margin-bottom-5"
                                            style={{
                                              backgroundColor: "#f0d6db",
                                              color: "#000",
                                            }}
                                          >
                                            2018-2019
                                          </span>
                                          <h5
                                            style={{
                                              textTransform: "uppercase",
                                            }}
                                          >
                                            {" "}
                                            <strong>
                                              {data.department}
                                            </strong>{" "}
                                          </h5>
                                          <p> {data.university} </p>
                                        </div>
                                        <Link
                                          style={{ marginRight: "5px" }}
                                          onClick={() =>
                                            this.openModal(data.id)
                                          }
                                        >
                                          <i className="icon-feather-edit"></i>
                                        </Link>
                                      </div>
                                      <p>{data.remark}</p>
                                      <Modal
                                        show={
                                          this.closeModal &&
                                          this.state.openedModal === data.id
                                        }
                                      >
                                        <div
                                          id="small-dialog"
                                          className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                                        ></div>
                                        <Modal.Header closeButton>
                                          <Modal.Title id="contained-modal-title-vcenter">
                                            <ul className="popup-tabs-nav">
                                              <li>
                                                <Link to="#tab">Education</Link>
                                              </li>
                                              <Button
                                                style={{
                                                  float: "right",
                                                  padding: "21px",
                                                }}
                                                onClick={this.closeModal}
                                              >
                                                Close
                                              </Button>
                                            </ul>
                                          </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                          <div className="popup-tabs-container">
                                            <div className="welcome-text">
                                              <h3>Edit Data</h3>
                                            </div>
                                            <div
                                              className="popup-tab-content"
                                              id="tab"
                                            >
                                              <form
                                                onSubmit={
                                                  this.updateEducationSubmit
                                                }
                                              >
                                                <div className="row">
                                                  <div className="col-xl-12">
                                                    <div className="input-with-icon-left no-border">
                                                      <i className="icon-line-awesome-university"></i>
                                                      <input
                                                        type="text"
                                                        className="input-text"
                                                        name="commentname"
                                                        value={data.university}
                                                        onChange={
                                                          this.handleChange
                                                        }
                                                        placeholder="University"
                                                        required
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                    <label>From date</label>

                                                    <div className="input-with-icon-left no-border">
                                                      <i className="icon-line-awesome-calendar"></i>
                                                      <input
                                                        type="date"
                                                        className="input-text"
                                                        name="commentname"
                                                        value={data.start_date}
                                                        onChange={
                                                          this.handleChange
                                                        }
                                                        placeholder="From Year"
                                                        required
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                    <label>Till date</label>
                                                    <div className="input-with-icon-left no-border">
                                                      <i className="icon-line-awesome-calendar"></i>
                                                      <input
                                                        type="date"
                                                        className="input-text"
                                                        name="emailaddress"
                                                        value={data.end_date}
                                                        onChange={
                                                          this.handleChange
                                                        }
                                                        placeholder="Till Year"
                                                        required
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-12">
                                                    <div className="">
                                                      <input
                                                        type="text"
                                                        className="input-text"
                                                        name="commentname"
                                                        value={data.department}
                                                        onChange={
                                                          this.handleChange
                                                        }
                                                        placeholder="Department"
                                                        required
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <textarea
                                                  name="comment-content"
                                                  value={data.remark}
                                                  onChange={this.handleChange}
                                                  cols="30"
                                                  rows="5"
                                                  placeholder="Comment"
                                                ></textarea>

                                                <button
                                                  className="button big ripple-effect margin-top-20 margin-bottom-20 "
                                                  style={{ float: "right" }}
                                                >
                                                  Save
                                                </button>
                                              </form>
                                            </div>
                                          </div>
                                        </Modal.Body>
                                      </Modal>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="boxed-list-item">
                          <div
                            className="item-content"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h4>Work Experience</h4>
                              <Link
                                style={{ marginRight: "5px" }}
                                onClick={() => this.openModal("addwork")}
                              >
                                <i className="icon-material-outline-add">
                                  {" "}
                                  Add-Experience
                                </i>
                              </Link>

                              <Modal
                                show={
                                  this.closeModal &&
                                  this.state.openedModal === "addwork"
                                }
                              >
                                <div
                                  id="small-dialog"
                                  className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                                ></div>
                                <Modal.Header closeButton>
                                  <Modal.Title id="contained-modal-title-vcenter">
                                    <ul className="popup-tabs-nav">
                                      <li>
                                        <Link to="#tab">Add</Link>
                                      </li>
                                      <Button
                                        style={{
                                          float: "right",
                                          padding: "21px",
                                        }}
                                        onClick={this.closeModal}
                                      >
                                        Close
                                      </Button>
                                    </ul>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="popup-tabs-container">
                                    <div className="welcome-text">
                                      <h3>Add Work Details</h3>
                                    </div>
                                    <div className="popup-tab-content" id="tab">
                                      <form>
                                        <div className="row">
                                          <div className="col-xl-6">
                                            <div className="input-with-icon-left no-border">
                                              <i className="icon-material-outline-account-circle"></i>
                                              <input
                                                type="text"
                                                className="input-text"
                                                name="commentname"
                                                id="namecomment"
                                                placeholder="Name"
                                                required
                                              />
                                            </div>
                                          </div>
                                          <div className="col-xl-6">
                                            <div className="input-with-icon-left no-border">
                                              <i className="icon-material-baseline-mail-outline"></i>
                                              <input
                                                type="text"
                                                className="input-text"
                                                name="emailaddress"
                                                id="emailaddress"
                                                placeholder="Email Address"
                                                required
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <textarea
                                          name="comment-content"
                                          cols="30"
                                          rows="5"
                                          placeholder="Comment"
                                        ></textarea>
                                      </form>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                            {userdetails?.experience === undefined ? (
                              <h4> Empty</h4>
                            ) : (
                              <div>
                                {userdetails?.experience.map((data, id) => {
                                  return (
                                    <div
                                      key={data.id}
                                      className="item-description"
                                    >
                                      <div className="boxed-list-item">
                                        <div className="item-content">
                                          <span
                                            className="company-not-rated margin-bottom-5"
                                            style={{
                                              backgroundColor: "#f0d6db",
                                              color: "#000",
                                            }}
                                          >
                                            2018-2019
                                          </span>
                                          <h4>{data.department}</h4>
                                        </div>
                                        <Link
                                          style={{ marginRight: "5px" }}
                                          onClick={() =>
                                            this.openModal(data.id)
                                          }
                                        >
                                          <i className="icon-feather-edit"></i>
                                        </Link>
                                      </div>
                                      <p>
                                        Great clarity in specification and
                                        communication. I got payment really
                                        fast. Really recommend this employer for
                                        his professionalism. I will work for him
                                        again with pleasure.
                                      </p>
                                      <Modal
                                        show={
                                          this.closeModal &&
                                          this.state.openedModal === data.id
                                        }
                                      >
                                        <Modal.Header>Modal title</Modal.Header>
                                        <Modal.Body>
                                          <b>{data.department}</b>
                                          <br />
                                          Lorem ipsum
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <Button
                                            color="primary"
                                            onClick={this.closeModal}
                                          >
                                            Do Something
                                          </Button>
                                        </Modal.Footer>
                                      </Modal>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>

              <div className="col-xl-6">
                <div className="dashboard-box margin-top-0">
                  <div
                    className="headline"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3 style={{ alignSelf: "center" }}>
                      <i className="icon-line-awesome-list-ul"></i> Your Posts
                    </h3>
                    {userdetails.is_email_verified === false ? (
                      <Link
                        onClick={() =>
                          toast.error("Please verify your account")
                        }
                        className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                      >
                        <i className="icon-feather-edit"></i> Post a Job
                      </Link>
                    ) : userdetails.active_membership === null ? (
                      <Link
                        onClick={() => toast.error("You need a membership")}
                        className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                      >
                        <i className="icon-feather-edit"></i> Post a Job
                      </Link>
                    ) : (
                      <Link
                        to="/post_job"
                        className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                      >
                        <i className="icon-feather-edit"></i> Post a Job
                      </Link>
                    )}
                  </div>
                  <div className="content">
                    <ul className="dashboard-box-list">
                      {userdetails?.clientjob?.map((data, id) => {
                        return (
                          <li>
                            <div>
                              <div
                                key={data.id}
                                className="job-listing width-adjustment"
                              >
                                <div className="job-listing-details">
                                  <div className="job-listing-description">
                                    <h3 className="job-listing-title">
                                      <Link to={`/view_job/${data.id}`}>
                                        {data.job_title}{" "}
                                      </Link>{" "}
                                    </h3>
                                    <div className="job-listing-footer">
                                      <ul>
                                        <li>
                                          <i className="icon-material-outline-access-time"></i>{" "}
                                          23 hours left
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <ul className="dashboard-task-info">
                                <li>
                                  <strong>
                                    ₹{data.min_budget} - ₹{data.max_budget}
                                  </strong>
                                </li>
                              </ul>

                              <div className="buttons-to-right always-visible">
                                <Link
                                  to={`/bidders/${data.id}`}
                                  className="button ripple-effect"
                                >
                                  <i className="icon-material-outline-supervisor-account"></i>{" "}
                                  Manage Bidders{" "}
                                </Link>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-footer-spacer"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userProfile.loading,
    userdetails: state.userProfile.userprofile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetUpdate: (id) => {
      dispatch(UserProfile(id));
    },
  };
};

//* now higher order function will call this function first

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileComponent);

//* state and dispatch will be comming as props

//* so now dispatch will come default