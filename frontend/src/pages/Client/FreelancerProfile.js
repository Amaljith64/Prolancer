import React, { useState, useEffect, useContext } from "react";
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useDispatch, useSelector } from "react-redux";
import { AllUsers } from '../../actions/postActions';
import { Link } from "react-router-dom"

const FreelancerProfile = () => {

	const alluser = useSelector((state) => state.allUsers);
	const {alluserloading, allusers,alluserserror} = alluser;

	const dispatch = useDispatch();
	console.log(allusers,'all userss')

	useEffect(() => {

		dispatch(AllUsers())

	  
	}, [])
	


  return (
	<>
	<Header/>
	<div className="clearfix"></div>

<div className="margin-top-100"></div>
	<div className="container">
	<div className="row">
		<div className="col-xl-3 col-lg-4">
			<div className="sidebar-container">
								

				
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
				
				<div className="sidebar-widget">
					<h3>Keywords</h3>
					<div className="keywords-container">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="e.g. task title"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Skills</h3>

					<div className="tags-container">
						<div className="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div className="clearfix"></div>

					<div className="keywords-container margin-top-20">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="add more skills"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>

					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
		<div className="col-xl-9 col-lg-8 content-left-offset">

			<h3 className="page-title">Search Results</h3>
			{
				alluserloading ? <div className="loadingspinner"></div>
				: alluserserror ? <h3>{alluserserror}</h3>
				:
				<div className="freelancers-container freelancers-list-layout compact-list margin-top-35">
					{allusers?.map((data,id)=>{
						return(

				<div key={data.id} className="freelancer">

					
					<div className="freelancer-overview">
						<div className="freelancer-overview-inner">
							
							
							<span className="bookmark-icon"></span>
							
							
							<div className="freelancer-avatar">
								<div className="verified-badge"></div>
								<Link to={`/profile/${data.id}`}><img src={data.profile_photo} alt=""/></Link>
							</div>
							

							
							<div className="freelancer-name">
								<h4><Link to="#">{data.username} <img className="flag" src={"images/flags/gb.svg"} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
								<span>UI/UX Designer</span>
								
								<div className="freelancer-rating">
									<div className="star-rating" data-rating="4.9"></div>
								</div>
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
						<Link to="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></Link>
					</div>
				</div>
				)})}		

			</div>
			
			}

			<div className="clearfix"></div>
			{/* <div className="row">
				<div className="col-md-12">
					
					<div className="pagination-container margin-top-40 margin-bottom-60">
						<nav className="pagination">
							<ul>
								<li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
								<li><Link to="#" className="ripple-effect">1</Link></li>
								<li><Link to="#" className="current-page ripple-effect">2</Link></li>
								<li><Link to="#" className="ripple-effect">3</Link></li>
								<li><Link to="#" className="ripple-effect">4</Link></li>
								<li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</div> */}
			
		</div>
	</div>
</div>
<Footer/>
</>
  )
}

export default FreelancerProfile