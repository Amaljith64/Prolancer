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

import Footer from "../../components/Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "../../components/Service";
import AuthContext from "../../context/AuthContext";
import useAxios from '../../utils/useAxios'

const plan1 = 100;
const plan2 = 200;
const plan3 = 300;

const HomePage = () => { 
  let api = useAxios()
  const userdetails = useSelector((state) => state.userProfile);
  const { userprofile, userprofileerror } = userdetails;
  const { user } = useContext(AuthContext);
  console.log(user,'profile')

  const userid = user?.user_id;

  const refresh = () => toast.warning("Wowwww so easy!");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const categoryList = useSelector((state) => state.listCategory);
  const { loading, category, error } = categoryList;

  const servicelist = useSelector((state) => state.serviceList);
  const { servicepost, serviceposterror } = servicelist;


  const joblist = useSelector((state) => state.jobList);
  const { jobpost, jobposterror } = joblist;




  useEffect(() => {

    dispatch(listcategory(api));
    dispatch(listservicepost());
    dispatch(listjobpost());
    dispatch(UserProfile(userid));


  }, []);

  return (
    <div>
      <Header />
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
              </div>
            </div>
            {category?.map((data, id) => {
              return (
                <div key={id} className="col-xl-3 col-md-6">
                  <Link
                    to=""
                    className="photo-box small"
                    style={{ backgroundImage: `url(${data.category_image})` }}
                  >
                    <div className="photo-box-content">
                      <h3>{data.category_name}</h3>
                      
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
                  {userprofile?.active_membership == 'Basic'
                                  ? <button style={{ width: '100%'}}
                                  className="pricing-plan-label full-width margin-top-20"
                                 
                                >
                                  <h3 > Purchased</h3>
                                 
                                </button>
                                  : <button
                                  className="button full-width margin-top-20"
                                  onClick={() => {
                                    {userprofile?.is_email_verified === false ? toast.error('Verify your account')
                                  :
                                    Navigate(`/checkout/${plan1}`);
                                  }
                                  }}
                                >
                                  Buy Now
                                </button>}
                  {" "}
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
                  


                  {userprofile?.active_membership == 'Standard'
                                  ? <button style={{ width: '100%'}}
                                  className="pricing-plan-label full-width margin-top-20"
                                 
                                >
                                  <h3 > Purchased</h3>
                                 
                                </button>
                                  : <button
                                  className="button full-width margin-top-20"
                                  onClick={() => {
                                    {userprofile?.is_email_verified === false ? toast.error('Verify your account')
                                  :
                                    Navigate(`/checkout/${plan2}`);
                                  }
                                  }}
                                >
                                  Buy Now
                                </button> }
                                


                            
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
                  {userprofile?.active_membership == 'Extended'
                      ? <button style={{ width: '100%'}}
                      className="pricing-plan-label full-width margin-top-20"
                      
                    >
                      <h3 > Purchased</h3>
                      
                    </button>
                      : <button
                      className="button full-width margin-top-20"
                      onClick={() => {
                        {userprofile?.is_email_verified === false ? toast.error('Verify your account')
                      :
                        Navigate(`/checkout/${plan3}`);
                      }
                      }}
                    >
                      Buy Now
                    </button> }
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
