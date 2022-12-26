import React, { useState, useEffect, useContext } from "react";

import Header from "../../components/Header";
import background from "../../assets/images/image.jpg";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  listcategory,
  listservicepost,
  listjobpost,
  UserProfile,
} from "../../actions/postActions";

import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "../../components/Service";
import AuthContext from "../../context/AuthContext";

const plan1 = 100;
const plan2 = 200;
const plan3 = 300;

const HomePage = () => {
  const { user } = useContext(AuthContext);

  const userid = user?.user_id;

  const notify = () => toast.warning("Wowwww so easy!");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const categoryList = useSelector((state) => state.listCategory);
  const { loading, category, error } = categoryList;

  const servicelist = useSelector((state) => state.serviceList);
  const { servicepost, serviceposterror } = servicelist;

  console.log(servicepost, "postttttttttt homeeeeee");

  const joblist = useSelector((state) => state.jobList);
  const { jobpost, jobposterror } = joblist;

  const userdetails = useSelector((state) => state.userProfile);
  const { userprofile, userprofileerror } = userdetails;

  useEffect(() => {
    console.log("effectt");

    dispatch(listcategory());
    dispatch(listservicepost());
    dispatch(listjobpost());
    dispatch(UserProfile(userid));
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="margin-top-80"></div>

      {loading ? (
        <div className="loadingspinner"></div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div
          className="intro-banner dark-overlay"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPositionY: "center",
          }}
        >
          <div className="transparent-header-spacer"></div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-headline">
                  <h3>
                    <strong>
                      Hire experts freelancers for any job, any time.
                    </strong>
                    <br />
                    <span>
                      Huge community of designers, developers and creatives
                      ready for your project.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section margin-top-65 margin-bottom-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-top-0 margin-bottom-45">
                <h3>Popular Categories</h3>
                <button onClick={notify}>click me</button>
              </div>
            </div>
            {category?.map((data, id) => {
              return (
                <div key={id} className="col-xl-3 col-md-6">
                  <Link
                    to="jobs-list-layout-1.html"
                    className="photo-box small"
                    style={{ backgroundImage: `url(${data.category_image})` }}
                  >
                    <div className="photo-box-content">
                      <h3>{data.category_name}</h3>
                      <span>612</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-35">
                <h3>Recent Tasks</h3>
                <Link to="/list_service" className="headline-link">
                  Browse All Tasks
                </Link>
              </div>

              <div className="freelancers-container freelancers-grid-layout margin-top-35">
                {servicepost?.service
                  ?.map((data, id) => {
                    return <Service key={id} data={data} />;
                  })
                  .slice(0, 2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section padding-top-60 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-top-0 margin-bottom-35">
                <h3>Membership Plans</h3>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="billing-cycle-radios margin-bottom-70"></div>

              <div className="pricing-plans-container">
                <div className="pricing-plan">
                  <h3>Basic Plan</h3>
                  <p className="margin-top-10">
                    {" "}
                    One time fee you need to pay for this membership.
                  </p>
                  <div className="pricing-plan-label billed-monthly-label">
                    <strong>₹{plan1}</strong>/ monthly
                  </div>
                  <div className="pricing-plan-features">
                    <strong>Features of Basic Plan</strong>
                    <ul>
                      <li>1 Listings</li>
                      <li>3 Days Visibility</li>
                      <li>Highlighted in Search Results</li>
                    </ul>
                  </div>
                  <button
                    className="button full-width margin-top-20"
                    onClick={() => {
                      Navigate(`/checkout/${plan3}`);
                    }}
                  >
                    Buy Now
                  </button>{" "}
                </div>

                <div className="pricing-plan recommended">
                  <div className="recommended-badge">Recommended</div>
                  <h3>Standard Plan</h3>
                  <p className="margin-top-10">
                    {" "}
                    One time fee you need to pay for this membership.
                  </p>
                  <div className="pricing-plan-label billed-monthly-label">
                    <strong>₹{plan2}</strong>/ monthly
                  </div>
                  <div className="pricing-plan-features">
                    <strong>Features of Standard Plan</strong>
                    <ul>
                      <li>5 Listings</li>
                      <li>6 Days Visibility</li>
                      <li>Highlighted in Search Results</li>
                    </ul>
                  </div>
                  <button
                    className="button full-width margin-top-20"
                    onClick={() => {
                      Navigate(`/checkout/${plan3}`);
                    }}
                  >
                    Buy Now
                  </button>{" "}
                </div>
                <div className="pricing-plan">
                  <h3>Extended Plan</h3>
                  <p className="margin-top-10">
                    {" "}
                    One time fee you need to pay for this membership.
                  </p>
                  <div className="pricing-plan-label billed-monthly-label">
                    <strong>₹{plan3}</strong>/ monthly
                  </div>
                  <div className="pricing-plan-features">
                    <strong>Features of Extended Plan</strong>
                    <ul>
                      <li>10 Listings</li>
                      <li>10 Days Visibility</li>
                      <li>Highlighted in Search Results</li>
                    </ul>
                  </div>
                  <Link
                    to="pages-checkout-page.html"
                    className="button full-width margin-top-20"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
