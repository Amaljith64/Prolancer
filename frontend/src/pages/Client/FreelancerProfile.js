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
	<div class="clearfix"></div>

<div class="margin-top-100"></div>
	<div class="container">
	<div class="row">
		<div class="col-xl-3 col-lg-4">
			<div class="sidebar-container">
								

				
				<div class="sidebar-widget">
					<h3>Category</h3>
					<select class="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
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
				
				<div class="sidebar-widget">
					<h3>Keywords</h3>
					<div class="keywords-container">
						<div class="keyword-input-container">
							<input type="text" class="keyword-input" placeholder="e.g. task title"/>
							<button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
						</div>
						<div class="keywords-list"></div>
						<div class="clearfix"></div>
					</div>
				</div>
				
				<div class="sidebar-widget">
					<h3>Skills</h3>

					<div class="tags-container">
						<div class="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div class="clearfix"></div>

					<div class="keywords-container margin-top-20">
						<div class="keyword-input-container">
							<input type="text" class="keyword-input" placeholder="add more skills"/>
							<button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
						</div>
						<div class="keywords-list"></div>
						<div class="clearfix"></div>

					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="col-xl-9 col-lg-8 content-left-offset">

			<h3 class="page-title">Search Results</h3>
			{
				alluserloading ? <div className="loadingspinner"></div>
				: alluserserror ? <h3>{alluserserror}</h3>
				:
				<div class="freelancers-container freelancers-list-layout compact-list margin-top-35">
					{allusers?.map((data,id)=>{
						return(

				<div key={data.id} class="freelancer">

					
					<div class="freelancer-overview">
						<div class="freelancer-overview-inner">
							
							
							<span class="bookmark-icon"></span>
							
							
							<div class="freelancer-avatar">
								<div class="verified-badge"></div>
								<Link to={`/profile/${data.id}`}><img src="images/user-avatar-big-01.jpg" alt=""/></Link>
							</div>
							

							
							<div class="freelancer-name">
								<h4><a href="#">{data.username} <img class="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
								<span>UI/UX Designer</span>
								
								<div class="freelancer-rating">
									<div class="star-rating" data-rating="4.9"></div>
								</div>
							</div>
						</div>
					</div>
					
					
					<div class="freelancer-details">
						<div class="freelancer-details-list">
							<ul>
								<li>Location <strong><i class="icon-material-outline-location-on"></i> London</strong></li>
								<li>Rate <strong>$60 / hr</strong></li>
								<li>Job Success <strong>95%</strong></li>
							</ul>
						</div>
						<a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"></i></a>
					</div>
				</div>
				)})}		

			</div>
			
			}

			<div class="clearfix"></div>
			{/* <div class="row">
				<div class="col-md-12">
					
					<div class="pagination-container margin-top-40 margin-bottom-60">
						<nav class="pagination">
							<ul>
								<li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
								<li><a href="#" class="ripple-effect">1</a></li>
								<li><a href="#" class="current-page ripple-effect">2</a></li>
								<li><a href="#" class="ripple-effect">3</a></li>
								<li><a href="#" class="ripple-effect">4</a></li>
								<li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
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