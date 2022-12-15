import React from "react";
import Header from "../../components/Header";
import Service from "../../components/Service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const JobListing = () => {
  const servicelist = useSelector((state) => state.serviceList);
  const { servicepost, serviceposterror } = servicelist;

  console.log(servicepost, "jhhhhhhhhhhhhhhhhh");

  return (  
    <>
      <Header />
      <div className="margin-top-70"></div>

      <div className="full-page-container">
        <div className="full-page-sidebar">
          <div className="full-page-sidebar-inner" data-simplebar>
            <div className="sidebar-container">
              <div className="sidebar-widget">
                <h3>Location</h3>
                <div className="input-with-icon">
                  <div id="autocomplete-container">
                    <input
                      id="autocomplete-input"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <i className="icon-material-outline-location-on"></i>
                </div>
              </div>

              <div className="sidebar-widget">
                <h3>Keywords</h3>
                <div className="keywords-container">
                  <div className="keyword-input-container">
                    <input
                      type="text"
                      className="keyword-input"
                      placeholder="e.g. job title"
                    />
                    <button className="keyword-input-button ripple-effect">
                      <i className="icon-material-outline-add"></i>
                    </button>
                  </div>
                  <div className="keywords-list">
                    <div className="clearfix"></div>
                  </div>
                </div>

                
              </div>
                <button className="button ripple-effect">Search</button>
             

            </div>
          </div>
        </div>

        <div className="full-page-content-container" data-simplebar>
          <div className="full-page-content-inner">
            <h3 className="page-title">Search Results</h3>

        

            {servicepost?.map((data, id) => {
              return (
                
                  <Service key={id} data={data} />
               
              );
            })}

            <div className="clearfix"></div>
            {/* <div className="pagination-container margin-top-20 margin-bottom-20">
              <nav className="pagination">
                <ul>
                  <li className="pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <i className="icon-material-outline-keyboard-arrow-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect current-page">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ripple-effect">
                      4
                    </Link>
                  </li>
                  <li className="pagination-arrow">
                    <Link to="#" className="ripple-effect">
                      <i className="icon-material-outline-keyboard-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div> */}
            <div className="clearfix"></div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
