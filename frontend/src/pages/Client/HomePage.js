import React, { useState, useEffect, useContext } from "react";

import Header from "../../components/Header";
import background from "../../assets/images/image.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listcategory,listservicepost } from "../../actions/postActions";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from "../../components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

  const showToastMessage = () => {
    console.log('toast')
    toast.success('Success Notification !', {
      position: toast.POSITION.BOTTOM_LEFT
    });
};

  const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.listCategory);
  const { loading,category,error} = categoryList;

  const servicelist = useSelector((state) => state.serviceList);
  const { servicepost,serviceposterror} = servicelist;


  useEffect(() => {
    
      dispatch(listcategory());

    
      dispatch(listservicepost());
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="margin-top-70"></div>

      {loading  ?  <h2>Loading...............</h2>
      : error ? <h3>{error}</h3>
      : 
      
      
      <div
        className="intro-banner dark-overlay"
        style={{
          backgroundImage: `url(${background})`,
        }}>
        <div className="transparent-header-spacer"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-headline">
                <h3>
                  <strong>
                    HHire experts freelancers for any job, any time.
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

          <div className="row">
            <div className="col-md-12">
              <div className="intro-banner-search-form margin-top-95">
                <div className="intro-search-field">
                  <label
                    htmlFor="intro-keywords"
                    className="field-title ripple-effect"
                  >
                    What service are you looking for today?
                  </label>
                  <input
                    id="intro-keywords"
                    type="text"
                    placeholder="e.g. build me a website"
                  />
                </div>

           

                <div className="intro-search-button">
                  <button className="button ripple-effect">Search</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                  <strong className="counter">1,586</strong>
                  <span>Jobs Posted</span>
                </li>
                <li>
                  <strong className="counter">3,543</strong>
                  <span>Tasks Posted</span>
                </li>
                <li>
                  <strong className="counter">1,232</strong>
                  <span>Freelancers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    }
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
                  <Link to="jobs-list-layout-1.html"
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
        <div className="container" style={{ maxWidth: "1393px" }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-35">
                <h3>Recent Tasks</h3>
                <Link to="tasks-list-layout-1.html" className="headline-link">
                  Browse All Tasks
                </Link>
              </div>

              <div className="freelancers-container freelancers-grid-layout margin-top-35">
                {servicepost?.map((data, id) => {
                  return (
                    <div key={id} className="freelancer">
                      <div className="freelancer-overview">
                        <div className="freelancer-overview-inner">
                          <div className="">
                            <Link
                              className="photo-box-custom "
                              style={{ backgroundImage: `url(${data.img})` }}
                            >
                              <div className="photo-box-content"></div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="freelancer-details">
                        <div className="freelancer-details-list">
                          <ul>
                            <li>
                              <img
                                className="card-image"
                                src="images/user-avatar-big-02.jpg"
                                alt=""
                              />
                            </li>
                            <li>
                            {data.service_title} <strong>${data.service_title}/ hr</strong>
                            </li>
                            <li>
                              <div className="freelancer-rating">
                                <div
                                  className="star-rating"
                                  data-rating="4.2"
                                ></div>
                              </div>
                            </li>
                          </ul>
                          <p>{data.service_title}</p>
                        </div>
                        <Link to="single-freelancer-profile.html"
                          className="button button-sliding-icon ripple-effect"
                        >
                          View Job{" "}
                          <i className="icon-material-outline-arrow-right-alt"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
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
      </div>

      

<div className="section gray padding-top-65 padding-bottom-70">
	<div className="container">
  <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerclassName="container-with-dots"
        dotListclassName=""
        draggable
        focusOnSelect={false}
        infinite
        itemclassName=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderclassName=""
        slidesToSlide={1}
        swipeable
      >
        <div className="freelancer">			
            <div className="freelancer-overview">
              <div className="freelancer-overview-inner">
              
                <span className="bookmark-icon"></span>
                
                <div className="freelancer-avatar">
                  <div className="verified-badge"></div>
                  <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt="" /></a>
                </div>

                <div className="freelancer-name">
                  <h4><a href="single-freelancer-profile.html">Tom Smith <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></a></h4>
                  <span>UI/UX Designer</span>
                </div>

                <div className="freelancer-rating">
                  <div className="star-rating" data-rating="5.0"></div>
                </div>
              </div>
            </div>
            <div className="freelancer-details">
              <div className="freelancer-details-list">
                <ul>
                  <li>Location <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
                  <li>Rate <strong>$60 / hr</strong></li>
                  <li>Job Success <strong>95%</strong></li>
                </ul>
              </div>
              <a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
            </div>
        </div>
        
        
      </Carousel>
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

			
				<div className="billing-cycle-radios margin-bottom-70">
					<div className="radio billed-monthly-radio">
						<input id="radio-5" name="radio-payment-type" type="radio" defaultChecked />
						<label htmlFor="radio-5"><span className="radio-label"></span> Billed Monthly</label>
					</div>

					<div className="radio billed-yearly-radio">
						<input id="radio-6" name="radio-payment-type" type="radio" />
						<label htmlFor="radio-6"><span className="radio-label"></span> Billed Yearly <span className="small-label">Save 10%</span></label>
					</div>
				</div>

			
				<div className="pricing-plans-container">

				
					<div className="pricing-plan">
						<h3>Basic Plan</h3>
						<p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
						<div className="pricing-plan-label billed-monthly-label"><strong>$19</strong>/ monthly</div>
						<div className="pricing-plan-label billed-yearly-label"><strong>$205</strong>/ yearly</div>
						<div className="pricing-plan-features">
							<strong>Features of Basic Plan</strong>
							<ul>
								<li>1 Listing</li>
								<li>30 Days Visibility</li>
								<li>Highlighted in Search Results</li>
							</ul>
						</div>
						<a href="pages-checkout-page.html" className="button full-width margin-top-20">Buy Now</a>
					</div>

				
					<div className="pricing-plan recommended">
						<div className="recommended-badge">Recommended</div>
						<h3>Standard Plan</h3>
						<p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
						<div className="pricing-plan-label billed-monthly-label"><strong>$49</strong>/ monthly</div>
						<div className="pricing-plan-label billed-yearly-label"><strong>$529</strong>/ yearly</div>
						<div className="pricing-plan-features">
							<strong>Features of Standard Plan</strong>
							<ul>
								<li>5 Listings</li>
								<li>60 Days Visibility</li>
								<li>Highlighted in Search Results</li>
							</ul>
						</div>
						<a href="pages-checkout-page.html" className="button full-width margin-top-20">Buy Now</a>
					</div>

				
					<div className="pricing-plan">
						<h3>Extended Plan</h3>
						<p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
						<div className="pricing-plan-label billed-monthly-label"><strong>$99</strong>/ monthly</div>
						<div className="pricing-plan-label billed-yearly-label"><strong>$1069</strong>/ yearly</div>
						<div className="pricing-plan-features">
							<strong>Features of Extended Plan</strong>
							<ul>
								<li>Unlimited Listings Listing</li>
								<li>90 Days Visibility</li>
								<li>Highlighted in Search Results</li>
							</ul>
						</div>
						<a href="pages-checkout-page.html" className="button full-width margin-top-20">Buy Now</a>
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
