import React from 'react'
import { Link } from "react-router-dom";

function Service({data}) {
  return (
    <>
    <div  className="listings-container grid-layout margin-top-35" style={{ width: "100%"}}>
        <Link to={`/single_service/${data.id}`} className="blog-post">
            <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
                <span className="blog-item-tag">₹{data.Price}</span>
                <img src={data.img} alt="" />
            </div>
            </div>

            <div className="blog-post-content">
            <span className="blog-post-date">{data.servicetime.slice(0,10)}</span>
            <h3>{data.service_title}</h3>
            <p>
            {data.service_description}
            </p>
            </div>

            <div className="entry-icon"></div>
        </Link>
    </div>
    </>
  )
}

export default Service



