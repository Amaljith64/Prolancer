import React from 'react'
import { format, render, cancel, register } from "timeago.js";

const ShowReview = (data) => {
  return (
    <>
    <li key={data.data.id}>
                      <div className="avatar">
                        <img src={data.data?.reviewuser?.profile_photo} alt="" />
                      </div>

                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>
                            {data.data.title} <span>{data.data.reviewuser?.username}</span>
                          </h4>
                          <div className="item-details margin-top-10">
                            <div className="ratingbutton">{data.data.stars}.0</div>
                            <div className="star-raating">
                              {data.data.stars < 1 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.data.stars < 2 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.data.stars < 3 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.data.stars < 4 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                              {data.data.stars < 5 ? (
                                <span className="star off">&#9733;</span>
                              ) : (
                                <span className="star on">&#9733;</span>
                              )}
                            </div>
                            <div className="detail-item">
                              <i className="icon-material-outline-date-range"></i>
                              {data.data.reviewtime?.slice(0, 10)}{" "}
                            </div>
                            {format(data.data.reviewtime)}
                          </div>
                          <div className="item-description">
                            <p>{data.data.review} </p>
                          </div>
                          <br />
                          {/* <div
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
                          </div> */}
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
      
    </>
  )
}

export default ShowReview
