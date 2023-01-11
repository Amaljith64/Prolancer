import React from "react";
import FreelancerSidebar from "../../components/FreelancerSidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export const Reviews = () => {
  return (
    <div>
      <Header />
      <div className="margin-top-70"></div>

      <div className="clearfix"></div>
      <div className="dashboard-container">
        <FreelancerSidebar />
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            <div className="dashboard-headline">
              <h3>All Reviews</h3>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-rate-review"></i>{" "}
                      Reply to your rating
                    </h3>
                  </div>

                  <div className="content">
                    <ul className="dashboard-box-list">
                      <li>
                        <div className="boxed-list-item">
                          <div className="item-content">
                            <h4>Service Name</h4>
                            <div className="item-description">
                              <p>Clients comment</p>
                            </div>
                          </div>
                        </div>
                        <Link
                          to=""
                          className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"
                        >
                          <i className="icon-feather-edit"></i> Click to Reply
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-footer-spacer"></div>
            <div className="small-footer margin-top-15">
              <div className="small-footer-copyrights">
                © 2019 <strong>Hireo</strong>. All Rights Reserved.
              </div>
              <ul className="footer-social-links">
                <li>
                  <Link to="#" title="Facebook" data-tippy-placement="top">
                    <i className="icon-brand-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Twitter" data-tippy-placement="top">
                    <i className="icon-brand-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Google Plus" data-tippy-placement="top">
                    <i className="icon-brand-google-plus-g"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" title="LinkedIn" data-tippy-placement="top">
                    <i className="icon-brand-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
