import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div id="footer">
	

	<div className="footer-top-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-12">

				
					
				</div>
			</div>
		</div>
	</div>



	<div className="footer-middle-section">
		<div className="container">
			<div className="row">

			
				<div className="col-xl-3 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Candidates</h3>
						<ul>
							<li><Link to="#"><span>Browse Jobs</span></Link></li>
							<li><Link to="#"><span>Add Resume</span></Link></li>
							<li><Link to="#"><span>Job Alerts</span></Link></li>
							<li><Link to="#"><span>My Bookmarks</span></Link></li>
						</ul>
					</div>
				</div>

			
				<div className="col-xl-3 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Employers</h3>
						<ul>
							<li><Link to="#"><span>Browse Candidates</span></Link></li>
							<li><Link to="#"><span>Post a Job</span></Link></li>
							<li><Link to="#"><span>Post a Task</span></Link></li>
							<li><Link to="#"><span>Plans & Pricing</span></Link></li>
						</ul>
					</div>
				</div>

			
				<div className="col-xl-3 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Helpful Links</h3>
						<ul>
							<li><Link to="#"><span>Contact</span></Link></li>
							<li><Link to="#"><span>Privacy Policy</span></Link></li>
							<li><Link to="#"><span>Terms of Use</span></Link></li>
						</ul>
					</div>
				</div>

			
				<div className="col-xl-3 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Account</h3>
						<ul>
							<li><Link to="#"><span>Log In</span></Link></li>
							<li><Link to="#"><span>My Account</span></Link></li>
						</ul>
					</div>
				</div>

			
				
			</div>
		</div>
	</div>

	

	<div className="footer-bottom-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					© 2022 <strong>Prolancer</strong>. All Rights Reserved.
				</div>
			</div>
		</div>
	</div>


</div>
      
    </>
  )
}

export default Footer
