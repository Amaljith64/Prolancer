import React, { useContext, useState, useEffect } from "react";
import { Singleservicepost } from "../../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StarRating from "../../components/StarRating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { format, render, cancel, register } from "timeago.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PaypalCheckOutButton from "../Freelancer/PaypalCheckOutButton";
import ShowReview from "../../components/ShowReview";

const SingleService = () => {

  const [modalShow, setModalShow] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [reload, setReload] = useState(false);

  const { user } = useContext(AuthContext);

  const Swal = require("sweetalert2");

  const dispatch = useDispatch();
  let { id } = useParams();
  const servicelist = useSelector((state) => state.viewService);
  const { singleservicepost, serviceposterror } = servicelist;

  console.log(singleservicepost,'single service')



  useEffect(() => {
    console.log('useeffect  for single post called')
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
 
    console.log("Review Submitted");
    console.log(user.user_id, "this is userrr");
    axios.post(`/client/viewsingleservice/${id}/`, {
      reviewuser: user.user_id,
      service: id,
      stars: parseInt(e.target.stars.value),
      title: e.target.title.value,
      review: e.target.review.value,
    }).then((res) =>{
      console.log(res,'response')
    }).catch((error) =>{

      toast.error(error.response?.data?.messgage);
      console.log(error.response?.data?.messgage,'error')
    })
    setReload(!reload);
    setRating(0)
    setHover(0)
    e.target.title.value=""
    e.target.review.value=""

    console.log("Reloaded");
  };

  const reviews = singleservicepost?.review;

  return (
    <>
      <Header />
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
                    <Link to="">
                      <img src={singleservicepost?.img} alt="" />
                    </Link>
                  </div>
                  <div className="header-details">
                    <h3>{singleservicepost?.service_title}</h3>
                    <Link to={`/profile/${singleservicepost?.user.id}`}><h5>Employer Name : {singleservicepost?.user.username}</h5></Link>
                  </div>
                </div>
                <div className="right-side">
                  <div className="salary-box">
                    <div className="salary-type">Price</div>
                    <div className="salary-amount">
                      ₹ {singleservicepost?.Price}
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
                {singleservicepost?.service_description}
              </pre>

              <p>{singleservicepost?.response_time}</p>

              <p>{singleservicepost?.Price}</p>
            </div>
            <div className="boxed-list margin-bottom-60">
              <div className="boxed-list-headline">
                <h3>
                  <i className="icon-material-outline-thumb-up"></i> Work
                  History and Feedback
                </h3>
              </div>
              <ul className="boxed-list-ul">
                {singleservicepost?.reviewed_user_details?.map((data, id) => {
                  return (
                    <ShowReview data={data} />
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
                        <Link to="#tab">Buy Now</Link>
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
                  <h3>Pay Rupees : {singleservicepost?.Price}</h3>
                </div>
                <div className="payment margin-top-30">

                <div className="payment-tab payment-tab-active">
                  <div className="payment-tab-trigger margin-top-20">
						<PaypalCheckOutButton  price={singleservicepost?.Price} 
						serviceid={singleservicepost?.id}
						/>
					</div>
					<div className="payment-tab-trigger margin-top-20">
					<form action={`/client/create-checkout-session/`} method="POST">
						<input type="hidden" name="price" value={singleservicepost?.Price}/>
						<input type="hidden" name="serviceid" value={singleservicepost?.id}/>
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
                Buy Now
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
                        <h5>₹{singleservicepost?.Price}</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i>
                        <span>Date Posted</span>
                        <h5>
                          {format(singleservicepost?.servicetime)}
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

      

      <Footer />
    </>
  );
};

export default SingleService;
