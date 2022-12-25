import React from 'react'
import { Link } from 'react-router-dom';

const FreelancerSidebar = () => {
  return (
    <>
    <div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				
				<Link to="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</Link>
				
				
				<div className="dashboard-nav">
					<div className="dashboard-nav-inner">

						<ul data-submenu-title="Start">
							<li ><Link to='/dashboard'><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link to='/myreviews'><i className="icon-material-outline-rate-review"></i>Reviews</Link></li>
							<li><Link to="/service"><i className="icon-material-outline-question-answer"></i>Jobs</Link></li>
						</ul>
						<ul data-submenu-title="Organize and Manage">
							<li><Link to='/mybids'><i className="icon-material-outline-rate-review"></i>My Bids</Link></li>
							<li><Link to="/service"><i className="icon-material-outline-question-answer"></i> My Services</Link></li>
						</ul>
						<ul data-submenu-title="Account">
							<li><Link to='/profile'><i className="icon-material-outline-star-border"></i> Profile</Link></li>
						</ul>
						
						
					</div>
				</div>
				

			</div>
		</div>
	</div>
      
    </>
  )
}

export default FreelancerSidebar