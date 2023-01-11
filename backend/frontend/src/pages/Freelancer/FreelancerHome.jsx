import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Header from "../../components/Header";
import background from "../../assets/images/image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listcategory, listjobpost, UserProfile } from "../../actions/postActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";
import QueryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { format} from 'timeago.js';
import useAxios from '../../utils/useAxios'
import { useSearchParams } from 'react-router-dom';

const plan1 = 100;
const plan2 = 200;
const plan3 = 300;

const HomePage = () => {
  let api = useAxios()


  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.get("price");
  const id = searchParams.get("id");



  console.log(price,'its priceeeeeeeeeeeeeee')

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation()

  const { user } = useContext(AuthContext);

  const userid = user?.user_id

  const [keyword, setKeyword] = useState('')

  console.log(keyword)

  const joblist = useSelector((state) => state.jobList);
  const { jobpost, jobposterror } = joblist;

  const userdetails = useSelector((state) => state.userProfile);
  const { userprofile,userprofileerror} = userdetails;

  const categoryList = useSelector((state) => state.listCategory);
  const { loading, category, error } = categoryList;
  console.log(category,'its cat err')

  

  let searchHandler = (e) => {
    if (e) {
      Navigate(`/list_job?keyword=${e}&page=1`)
  }
  }

  console.log(jobpost)
  useEffect(() => {

    
    const values = QueryString.parse(location.search)
    console.log(values)
    if (values.success) {
      if (values.type === 'membership'){
        console.log('membership')
  
        api.post('/client/strpiemembershippayment/',{
          'user': user.user_id,
          'price':price
          }).then((response)=>{
          Navigate('/success')
          })
  
  
      }
  
      else if (values.type === 'job'){
        console.log('job')
  
        api.post('/client/stripejobpayment/',{
          'user': user.user_id,
          'price':price,
          'jobid': id,
          'payment_method': 'PayPal'
          }).then((response)=>{
          Navigate('/success')
          })
  
  
      }
      else if (values.type === 'service'){
        console.log('service')
        api.post('/client/stripeservicepayment/',{
          'user': user.user_id,
          'price':price,
          'serviceid': id,
          'payment_method': 'PayPal'
          }).then((response)=>{
          Navigate('/success')
          })
      }
      
      }
  
      if (values.canceled) {
          Navigate("/cancelled")
      }
      dispatch(listcategory());
      dispatch(listjobpost());
      dispatch(UserProfile(userid))


    
  }, []);

  return (
    <div>
      <Header />
      <div className="margin-top-80"></div>
      <div
        className="intro-banner dark-overlay"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionY: 'center'
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
                    Huge community of designers, developers and creatives ready
                    for your project.
                  </span>
                </h3>
              </div>
            </div>
          </div>


          
        </div>
      </div>

      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
        <div className="container" style={{ maxWidth: "1393px" }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-35">
                <h3>Recent Jobs</h3>
                <Link to="/list_job" className="headline-link">
                  Browse All Jobs
                </Link>
              </div>
              {jobpost?.jobs?.map((data, id) => {
                return (
                  <div
                    key={data.id}
                    className="tasks-list-container compact-list margin-top-35"
                  >
                    <Link to={`/view_job/${data.id}`} className="task-listing">
                      <div className="task-listing-details">
                        <div className="task-listing-description">
                          <h3 className="task-listing-title">
                            {data.job_title}
                          </h3>
                          <ul className="task-icons">
                            <li>
                              <i className="icon-material-outline-location-on"></i>{" "}
                              San Francisco
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time"></i>{" "}
                              {format(data.jobtime)}
                            </li>
                          </ul>
                          <div className="task-tags margin-top-15">
                            <p>
                              {" "}
                              <b>{data.job_description}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="task-listing-bid">
                        <div className="task-listing-bid-inner">
                          <div className="task-offers">
                            <strong>
                              ${data.min_budget} - ${data.max_budget}
                            </strong>
                            <span>Fixed Price</span>
                          </div>
                          <span className="button button-sliding-icon ripple-effect">
                            Bid Now{" "}
                            <i className="icon-material-outline-arrow-right-alt"></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section padding-top-65 padding-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-top-0 margin-bottom-5">
                <h3>How It Works?</h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box with-line">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className="icon-line-awesome-lock"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Create an Account</h3>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination going forward.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box with-line">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className="icon-line-awesome-legal"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Post a Task</h3>
                <p>
                  Efficiently unleash cross-media information without. Quickly
                  maximize return on investment.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className=" icon-line-awesome-trophy"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Choose an Expert</h3>
                <p>
                  Nanotechnology immersion along the information highway will
                  close the loop on focusing solely.
                </p>
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
                <div className="billing-cycle-radios margin-bottom-50">
                  
                </div>

                <div className="pricing-plans-container">
                  <div className="pricing-plan">
                    <h3>Basic Plan</h3>
                    <p className="margin-top-10">
                      One time fee you need to pay for this membership.
                    </p>
                    <div className="pricing-plan-label billed-monthly-label">
                      <strong>₹{plan1}</strong>/ monthly
                    </div>
                    <div className="pricing-plan-features">
                      <strong>Features of Basic Plan</strong>
                      <ul>
                        <li>1 Listing</li>
                        <li>3  Days Visibility</li>
                        <li>Highlighted in Search Results</li>
                      </ul>
                    </div>
                    <button
                     
                      className="button full-width margin-top-20"
                      onClick={() => {
                        Navigate(`/checkout/${plan1}`);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="pricing-plan recommended">
                    <div className="recommended-badge">Recommended</div>
                    <h3>Standard Plan</h3>
                    <p className="margin-top-10">
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
                        Navigate(`/checkout/${plan2}`);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="pricing-plan">
                    <h3>Extended Plan</h3>
                    <p className="margin-top-10">
                      One time fee you need to pay for this membership.
                    </p>
                    <div className="pricing-plan-label billed-monthly-label">
                      <strong>₹{plan3}</strong>/ monthly
                    </div>
                    <div className="pricing-plan-label billed-yearly-label">
                      <strong>$1069</strong>/ yearly
                    </div>
                    <div className="pricing-plan-features">
                      <strong>Features of Extended Plan</strong>
                      <ul>
                        <li>10 Listings</li>
                        <li>10 Days Visibility</li>
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
                    </button>
                  </div>
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
