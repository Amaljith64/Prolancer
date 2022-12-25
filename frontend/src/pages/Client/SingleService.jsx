import React, { useContext, useState, useEffect } from "react";
import { Singleservicepost } from "../../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StarRating from "../../components/StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { format, render, cancel, register } from "timeago.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PaypalCheckOutButton from "../Freelancer/PaypalCheckOutButton";

const SingleService = () => {
  const [modalShow, setModalShow] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [reload, setReload] = useState();

  const { user } = useContext(AuthContext);

  const Swal = require("sweetalert2");

  const dispatch = useDispatch();
  let { id } = useParams();
  const servicelist = useSelector((state) => state.viewService);
  const { singleservicepost, serviceposterror } = servicelist;
  console.log(singleservicepost)

  useEffect(() => {
    dispatch(Singleservicepost(id));
  }, [reload]);

  const reportPost = (e) => {
    Swal.fire({
      title: "Are you sure !",
      text: "You want to report this post ?",
      icon: "warning",
      showCancelButton: "true",
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES,Report",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`/client/reportservice/${id}/`, {
          reportuser: user.user_id,
          service: id,
        });
        toast.danger("You have Reported");
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Review Submitted");
    console.log("Review Submitted");
    console.log(user.user_id, "this is userrr");
    axios.post(`/client/viewsingleservice/${id}/`, {
      reviewuser: user.user_id,
      service: id,
      stars: parseInt(e.target.stars.value),
      title: e.target.title.value,
      review: e.target.review.value,
    });
    setReload(!reload);

    console.log("Reloaded");
  };

  const reviews = singleservicepost?.review;

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="margin-top-70"></div>
      <div
        className="single-page-header"
        data-background-image="/images/single-job.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-page-header-inner">
                <div className="left-side">
                  <div className="header-image">
                    <Link to="single-company-profile.html">
                      <img src={singleservicepost?.service.img} alt="" />
                    </Link>
                  </div>
                  <div className="header-details">
                    <h3>{singleservicepost?.service.service_title}</h3>
                    <h5>Employer Name : {singleservicepost?.service.user}</h5>
                  </div>
                </div>
                <div className="right-side">
                  <div className="salary-box">
                    <div className="salary-type">Price</div>
                    <div className="salary-amount">
                      ₹ {singleservicepost?.service.Price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 content-right-offset">
            <div className="single-page-section">
              <h3 className="margin-bottom-25">Job Description</h3>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  fontFamily:
                    '"Nunito", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  textTransform: "none",
                }}
              >
                {singleservicepost?.service.service_description}
              </pre>

              <p>{singleservicepost?.service.response_time}</p>

              <p>{singleservicepost?.service.Price}</p>
            </div>
            <div className="boxed-list margin-bottom-60">
              <div className="boxed-list-headline">
                <h3>
                  <i className="icon-material-outline-thumb-up"></i> Work
                  History and Feedback
                </h3>
              </div>
              <ul className="boxed-list-ul">
                {singleservicepost?.review.map((data, id) => {
                  return (
                    <li key={id}>
                      <div className="avatar">
                        <img src="/images/user-avatar-placeholder.png" alt="" />
                      </div>

                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>
                            {data.title} <span>{data.reviewuser}</span>
                          </h4>
                          <div className="item-details margin-top-10">
                            <div className="ratingbutton">{data.stars}.0</div>
                            <div className="star-raating">
                              {data.stars < 1 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.stars < 2 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.stars < 3 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.stars < 4 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.stars < 5 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                            </div>
                            <div className="detail-item">
                              <i className="icon-material-outline-date-range"></i>
                              {data.reviewtime.slice(0, 10)}{" "}
                            </div>
                            {format(data.reviewtime)}
                          </div>
                          <div className="item-description">
                            <p>{data.review} </p>
                          </div>
                          <br />
                          <div
                            className="detail-item "
                            style={{
                              display: "flex",
                              gap: "23px",
                              paddingTop: " 1px",
                            }}
                          >
                            <p>
                              {" "}
                              <strong>Helpful? </strong>{" "}
                            </p>
                            <i className="fa icon-material-outline-thumb-up">
                              Yes
                            </i>
                            <i className="fa icon-material-outline-thumb-down">
                              No
                            </i>
                          </div>
                        </div>
                      </div>
                      <ul
                        className="boxed-list-ul"
                        style={{ paddingLeft: "34px" }}
                      >
                        <li>
                          <div className="avatar">
                            <img
                              src="/images/user-avatar-placeholder.png"
                              alt=""
                            />
                          </div>
                          <div className="item-content">
                            <div className="arrow-comment"></div>
                            <div className="comment-by">Tom Smith</div>
                            <p>
                              Rrhoncus et erat. Nam posuere tristique sem, eu
                              ultricies tortor imperdiet vitae. Curabitur
                              lacinia neque.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  );
                })}
                <li>
                  <div className="boxed-list-itemm">
                    <div className="item-content">
                      <h3>Add Review</h3>
                      <span>Your Rating</span>
                      <form onSubmit={submitHandler}>
                        <div className="feedback-yes-no">
                          <div className="leave-rating">
                            <StarRating
                              setRating={setRating}
                              setHover={setHover}
                              rating={rating}
                              hover={hover}
                            />
                          </div>
                          <input type="hidden" name="stars" value={rating} />
                          <input
                            type="text"
                            placeholder="Add a title."
                            name="title"
                          />
                          <textarea
                            className="with-border"
                            placeholder="Enter your review.."
                            name="review"
                            required
                          ></textarea>
                        </div>

                        <input
                          className="button full-width button-sliding-icon ripple-effect"
                          type="submit"
                          value="Add Review"
                        />
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="sidebar-container">
              <Modal show={modalShow}>
                <div
                  id="small-dialog"
                  className="zoom-anim-dialog mfp-hide dialog-with-tabs"
                ></div>
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <ul className="popup-tabs-nav">
                      <li>
                        <Link to="#tab">Apply Now</Link>
                      </li>
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
					<h3>Pay Rupees : {singleservicepost?.service.Price}</h3>
				</div>
				<div className="payment margin-top-30">

				<div className="payment-tab payment-tab-active">
					<div className="payment-tab-trigger margin-top-20">
						<PaypalCheckOutButton  price={singleservicepost?.service.Price} 
						serviceid={singleservicepost?.service.id}
						/>
					</div>
					<div className="payment-tab-trigger margin-top-20">
					<form action={`/client/create-checkout-session/`} method="POST">
						<input type="hidden" name="price" value={singleservicepost?.service.Price}/>
						<button
						type="submit"
						className="btn btn-primary btn-rounded fs-4 margin-bottom-20"
						style={{width: "100%",
							height: "45px",
							borderRadius: "22px",
							backgroundColor: "#55718d",
							color: "white",
							layout: "horizontal",
							shape: "pill" }}
						>
						<strong>Pay with Stripe</strong>
					</button>
      				</form>
					</div>

					
				</div>



			</div>
				</div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>

              <Link onClick={() => setModalShow(true)} className="apply-now-button popup-with-zoom-anim">
                Apply Now
                <i className="icon-material-outline-arrow-right-alt"></i>
              </Link>

              <div className="sidebar-widget">
                <div className="job-overview">
                  <div className="job-overview-headline">Job Summary</div>
                  <div className="job-overview-inner">
                    <ul>
                      <li>
                        <i className="icon-material-outline-local-atm"></i>
                        <span>Price</span>
                        <h5>₹{singleservicepost?.service.Price}</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i>
                        <span>Date Posted</span>
                        <h5>
                          {format(singleservicepost?.service.servicetime)}
                        </h5>
                      </li>
                      <li>
                        <i className="icon-feather-flag"></i>
                        <span>Report Post</span>
                        <Link onClick={reportPost}>Click here</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="small-dialog"
        className="zoom-anim-dialog mfp-hide dialog-with-tabs"
      >
        <div className="sign-in-form ">
          <ul className="popup-tabs-nav">
            <li>
              <Link to="#tab">Apply Now</Link>
            </li>
          </ul>

          <div className="popup-tabs-container">
            <div className="popup-tab-content" id="tab">
              <div className="welcome-text">
                <h3>Attach File With CV</h3>
              </div>

              <form method="post" id="apply-now-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-account-circle"></i>
                  <input
                    type="text"
                    className="input-text with-border"
                    name="name"
                    id="name"
                    placeholder="First and Last Name"
                    required
                  />
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input
                    type="text"
                    className="input-text with-border"
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="uploadButton">
                  <input
                    className="uploadButton-input"
                    type="file"
                    accept="image/*, application/pdf"
                    id="upload-cv"
                  />
                  <label
                    className="uploadButton-button ripple-effect"
                    for="upload-cv"
                  >
                    Select File
                  </label>
                  <span className="uploadButton-file-name">
                    Upload your CV / resume relevant file. <br /> Max. file
                    size: 50 MB.
                  </span>
                </div>
              </form>

              <button
                className="button margin-top-35 full-width button-sliding-icon ripple-effect"
                type="submit"
                form="apply-now-form"
              >
                Apply Now{" "}
                <i className="icon-material-outline-arrow-right-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleService;
