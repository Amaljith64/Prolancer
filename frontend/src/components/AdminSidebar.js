import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
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
							<li ><Link to='/admin'><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link to="/allpost"><i className="icon-material-outline-question-answer"></i> Posts</Link></li>
							<li><Link to='/allusers'><i className="icon-material-outline-star-border"></i> Users</Link></li>
							<li><Link to='/upcomming'><i className="icon-material-outline-rate-review"></i> Verifications</Link></li>
						</ul>
						
						{/* <ul data-submenu-title="Organize and Manage">
							<li><Link to="#"><i className="icon-material-outline-business-center"></i> Jobs</Link>
									
							</li>
							<li><Link to="#"><i className="icon-material-outline-assignment"></i> Tasks</Link>
									
							</li>
						</ul> */}

						{/* <ul data-submenu-title="Account">
							<li><Link to="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</Link></li>
							<li><Link to="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
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
