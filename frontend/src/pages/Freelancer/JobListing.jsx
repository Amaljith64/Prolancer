import React from 'react'
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from '../../components/Footer';

const JobListing = () => {

const joblist = useSelector((state) => state.jobList);
const { jobpost,jobposterror } = joblist;

    return (
<>
<Header/>
<div className="margin-top-70"></div>
    
<div className="full-page-container">

<div className="full-page-sidebar">
    <div className="full-page-sidebar-inner" data-simplebar>
        <div className="sidebar-container">   
            <div className="sidebar-widget">
                <h3>Location</h3>
                <div className="input-with-icon">
                    <div id="autocomplete-container">
                        <input id="autocomplete-input" type="text" placeholder="Location" />
                    </div>
                    <i className="icon-material-outline-location-on"></i>
                </div>
            </div> 
            <div className="sidebar-widget">
                <h3>Keywords</h3>
                <div className="keywords-container">
                    <div className="keyword-input-container">
                        <input type="text" className="keyword-input" placeholder="e.g. job title"/>
                        <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                    </div>
                    <div className="keywords-list">
                    <div className="clearfix"></div>
                </div>
            </div>            
            <div className="sidebar-widget">
                <h3>Category</h3>
                <select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
                    <option>Admin Support</option>
                    <option>Customer Service</option>
                    <option>Data Analytics</option>
                    <option>Design & Creative</option>
                    <option>Legal</option>
                    <option>Software Developing</option>
                    <option>IT & Networking</option>
                    <option>Writing</option>
                    <option>Translation</option>
                    <option>Sales & Marketing</option>
                </select>
            </div>           
        </div>      
        <div className="sidebar-search-button-container">
            <button className="button ripple-effect">Search</button>
        </div>
    </div>
</div>
</div>
  

<div className="full-page-content-container" data-simplebar>
    <div className="full-page-content-inner">
        <h3 className="page-title">Jobs Available</h3>
        {jobpost.map((data,id) => {
            return (
        <div key={data.id} className="listings-container grid-layout margin-top-35">
            
				<Link to={`/view_job/${data.id}`} className="blog-post">
					
					<div className="blog-post-thumbnail">
						<div className="blog-post-thumbnail-inner">
							<span className="blog-item-tag">Tips</span>
							<img src={data.img} alt=""/>
						</div>
					</div>
					<div className="blog-post-content">
						<span className="blog-post-date">22 July 2019</span>
						<h3>{data.job_title}</h3>
						<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
					</div>
					
					<div className="entry-icon"></div>
				</Link>
        </div>
        )})} 
        <div className="clearfix"></div>
        <div className="pagination-container margin-top-20 margin-bottom-20">
            <nav className="pagination">
                <ul>
                    <li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
                    <li><Link to="#" className="ripple-effect">1</Link></li>
                    <li><Link to="#" className="ripple-effect current-page">2</Link></li>
                    <li><Link to="#" className="ripple-effect">3</Link></li>
                    <li><Link to="#" className="ripple-effect">4</Link></li>
                    <li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
                </ul>
            </nav>
        </div> 
    </div>
</div>
</div>      
{/* <Footer /> */}
</>
  )
}

export default JobListing
