import React from 'react'
import { Link } from "react-router-dom";

const Jobs = (data) => {
    console.log(data,'its job  comp')
  return (
    <>
    <div  className="listings-container grid-layout margin-top-35" style={{ width: "100%"}}>
        <Link to={`/single_service/${data.data.id}`} className="blog-post">
            <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
                <span className="blog-item-tag">₹{data.data.min_budget}</span>
                <span className="blog-item-tag">₹{data.data.max_budget}</span>
                <img src={data.data.img} alt="" />
            </div>
            </div>

            <div className="blog-post-content">
            <span className="blog-post-date">{data.data.jobtime}</span>
            <h3>{data.data.job_title}</h3>
            <p>
            {data.data.job_description}
            </p>
            </div>

            <div className="entry-icon"></div>
        </Link>
    </div>
    </>
  )
}

export default Jobs