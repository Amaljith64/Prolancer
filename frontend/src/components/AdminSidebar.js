import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
    <div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				
				<a href="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</a>
				
				
				<div className="dashboard-nav">
					<div className="dashboard-nav-inner">

						<ul data-submenu-title="Start">
							<li ><Link to='/admin'><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link to="/allpost"><i className="icon-material-outline-question-answer"></i> Posts</Link></li>
							<li><Link to='/allusers'><i className="icon-material-outline-star-border"></i> Users</Link></li>
							<li><Link to='/upcomming'><i className="icon-material-outline-rate-review"></i> Verifications</Link></li>
						</ul>
						
						{/* <ul data-submenu-title="Organize and Manage">
							<li><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
									
							</li>
							<li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
									
							</li>
						</ul> */}

						{/* <ul data-submenu-title="Account">
							<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
							<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
						</ul> */}
						
					</div>
				</div>
				

			</div>
		</div>
	</div>
      
    </>
  )
}

export default AdminSidebar
