import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { ServicePurchaseHistory } from "../actions/postActions";
import AuthContext from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";


const UserPurchase = () => {
  const dispatch = useDispatch();
  let { user } = useContext(AuthContext);

  const serviceHistory = useSelector((state) => state.serviceHistory);
  const { servicehistoryloading, servicehistory, servicehistoryerror } =
    serviceHistory;

  console.log(servicehistory, "history");
  console.log(servicehistoryerror, "error");

  useEffect(() => {
    dispatch(ServicePurchaseHistory(user.user_id));
  }, []);
  const Navigate = useNavigate();

  return (
    <>
      <div className="margin-top-70"></div>
      <Header />

      <div className="full-page-container">
        <div className="full-page-content-container" data-simplebar>
          <div className="full-page-content-inner">
            <h3 className="page-title">My Orders</h3>

            <div class="row">
              <div class="col-xl-12">
                <div class="dashboard-box margin-top-0">
                  <div class="headline">
                    <h3>
                      <i class="icon-material-outline-business-center"></i> All History
                    </h3>
                  </div>

                  <div class="content">
                    <ul class="dashboard-box-list">
                      {servicehistoryloading === true ? (
                        <div className="loadingspinner"></div>
                      ) : (
                        servicehistory.map((data) => {
                          return (
                            <li>
                              <div class="job-listing">
                                <div class="job-listing-details">
                                  <a href="#" class="job-listing-company-logo">
                                    <img
                                      src={data.getservice.img}
                                      alt=""
                                    />
                                  </a>
                                  <div class="job-listing-description">
                                    <h3 class="job-listing-title">
                                      <a onClick={()=>Navigate(`/single_service/${data.id}`)}>
                                        {data.getservice.service_title}
                                      </a>{" "}
                                      
                                    </h3>

                                    <div class="job-listing-footer">
                                      <ul>
                                        <li>
                                          Price: {data.getservice.Price}
                                        </li>
                                        <li>
                                            Payment Method: {data.payment_method}
                                          
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="buttons-to-right always-visible">
                                <Link
                                  to={`/profile/${data.id}`}
                                  class="button ripple-effect"
                                >
                                  <i class="icon-material-outline-supervisor-account"></i>{" "}
                                  Service Provider{" "}
                                </Link>
                                
                                
                              </div>
                            </li>
                          );
                        })
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPurchase;
