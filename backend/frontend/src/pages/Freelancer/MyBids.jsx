import React from "react";
import FreelancerSidebar from "../../components/FreelancerSidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const MyBids = () => {
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
              <h3>My Active Bids</h3>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-gavel"></i> Bids List
                    </h3>
                  </div>

                  <div className="content">
                    <ul className="dashboard-box-list">
                      <li>
                        <div className="job-listing width-adjustment">
                          <div className="job-listing-details">
                            <div className="job-listing-description">
                              <h3 className="job-listing-title">
                                <Link to="#">WordPress Guru Needed</Link>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <ul className="dashboard-task-info">
                          <li>
                            <strong>$40</strong>
                            <span>Hourly Rate</span>
                          </li>
                          <li>
                            <strong>2 Days</strong>
                            <span>Delivery Time</span>
                          </li>
                        </ul>

                        <div className="buttons-to-right always-visible">
                          <Link
                            to="#small-dialog"
                            className="popup-with-zoom-anim button dark ripple-effect ico"
                            title="Edit Bid"
                            data-tippy-placement="top"
                          >
                            <i className="icon-feather-edit"></i>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-footer-spacer"></div>
            <div className="small-footer margin-top-15">
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
