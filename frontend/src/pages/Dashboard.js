import React from 'react'

function Dashboard() {
  return (
    <div>
      <header id="header-container" className="fullwidth dashboard-header not-sticky">


<div id="header">
    <div className="container">
        
        
        <div className="left-side">
            
            
            <div id="logo">
                <a href="index.html"><img src="images/logo.png" alt=""/></a>
            </div>

            
            <nav id="navigation">
                <ul id="responsive">

                    <li><a href="#">Home</a>
                        <ul className="dropdown-nav">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li><a href="index-3.html">Home 3</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Find Work</a>
                        <ul className="dropdown-nav">
                            <li><a href="#">Browse Jobs</a>
                                <ul className="dropdown-nav">
                                    <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                                    <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                                    <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Browse Tasks</a>
                                <ul className="dropdown-nav">
                                    <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                                    <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                                    <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                                </ul>
                            </li>
                            <li><a href="browse-companies.html">Browse Companies</a></li>
                            <li><a href="single-job-page.html">Job Page</a></li>
                            <li><a href="single-task-page.html">Task Page</a></li>
                            <li><a href="single-company-profile.html">Company Profile</a></li>
                        </ul>
                    </li>

                    <li><a href="#">For Employers</a>
                        <ul className="dropdown-nav">
                            <li><a href="#">Find a Freelancer</a>
                                <ul className="dropdown-nav">
                                    <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                                    <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                                    <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                                </ul>
                            </li>
                            <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                            <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                            <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="current">Dashboard</a>
                        <ul className="dropdown-nav">
                            <li><a href="dashboard.html">Dashboard</a></li>
                            <li><a href="dashboard-messages.html">Messages</a></li>
                            <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                            <li><a href="dashboard-reviews.html">Reviews</a></li>
                            <li><a href="dashboard-manage-jobs.html">Jobs</a>
                                <ul className="dropdown-nav">
                                    <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                                    <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                                    <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                </ul>
                            </li>
                            <li><a href="dashboard-manage-tasks.html">Tasks</a>
                                <ul className="dropdown-nav">
                                    <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                                    <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                                    <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                                    <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                </ul>
                            </li>
                            <li><a href="dashboard-settings.html">Settings</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Pages</a>
                        <ul className="dropdown-nav">
                            <li>
                                <a href="#">Open Street Map</a>
                                <ul className="dropdown-nav">
                                    <li><a href="jobs-list-layout-full-page-map-OpenStreetMap.html">Full Page List + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page-map-OpenStreetMap.html">Full Page Grid + Map</a></li>
                                    <li><a href="single-job-page-OpenStreetMap.html">Job Page</a></li>
                                    <li><a href="single-company-profile-OpenStreetMap.html">Company Profile</a></li>
                                    <li><a href="pages-contact-OpenStreetMap.html">Contact</a></li>
                                    <li><a href="jobs-list-layout-1-OpenStreetMap.html">Location Autocomplete</a></li>
                                </ul>
                            </li>
                            <li><a href="pages-blog.html">Blog</a></li>
                            <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                            <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                            <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                            <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                            <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                            <li><a href="pages-login.html">Login & Register</a></li>
                            <li><a href="pages-404.html">404 Page</a></li>
                            <li><a href="pages-contact.html">Contact</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <div className="clearfix"></div>
            
            
        </div>
        


        
        <div className="right-side">

            
            <div className="header-widget hide-on-mobile">
                
                
                <div className="header-notifications">

                    
                    <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-bell"></i><span>4</span></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        <div className="header-notifications-headline">
                            <h4>Notifications</h4>
                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                <i className="icon-feather-check-square"></i>
                            </button>
                        </div>

                        <div className="header-notifications-content">
                            <div className="header-notifications-scroll" data-simplebar>
                                <ul>
                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-bidders.html">
                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                            <span className="notification-text">
                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-jobs.html">
                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                            <span className="notification-text">
                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                
                
                <div className="header-notifications">
                    <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-mail"></i><span>3</span></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        <div className="header-notifications-headline">
                            <h4>Messages</h4>
                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                <i className="icon-feather-check-square"></i>
                            </button>
                        </div>

                        <div className="header-notifications-content">
                            <div className="header-notifications-scroll" data-simplebar>
                                <ul>
                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt=""/></span>
                                            <div className="notification-text">
                                                <strong>David Peterson</strong>
                                                <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                                <span className="color">4 hours ago</span>
                                            </div>
                                        </a>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt=""/></span>
                                            <div className="notification-text">
                                                <strong>Sindy Forest</strong>
                                                <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </a>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt=""/></span>
                                            <div className="notification-text">
                                                <strong>Marcin Kowalski</strong>
                                                <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                </div>

            </div>
            

            
            <div className="header-widget">

                
                <div className="header-notifications user-menu">
                    <div className="header-notifications-trigger">
                        <a href="#"><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        
                        <div className="user-status">

                            
                            <div className="user-details">
                                <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div>
                                <div className="user-name">
                                    Tom Smith <span>Freelancer</span>
                                </div>
                            </div>
                            
                            
                            <div className="status-switch" id="snackbar-user-status">
                                <label className="user-online current-status">Online</label>
                                <label className="user-invisible">Invisible</label>
                                
                                <span className="status-indicator" aria-hidden="true"></span>
                            </div>	
                    </div>
                    
                    <ul className="user-menu-small-nav">
                        <li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                        <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
                        <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                    </ul>

                    </div>
                </div>

            </div>
            

            
            <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </span>

        </div>
        

    </div>
</div>


</header>
<div className="clearfix"></div>
<div className="dashboard-container">

	
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
							<li className="active"><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
							<li><a href="dashboard-messages.html"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></a></li>
							<li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks</a></li>
							<li><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
						</ul>
						
						<ul data-submenu-title="Organize and Manage">
							<li><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
								<ul>
									<li><a href="dashboard-manage-jobs.html">Manage Jobs <span className="nav-tag">3</span></a></li>
									<li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
									<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
								</ul>	
							</li>
							<li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
								<ul>
									<li><a href="dashboard-manage-tasks.html">Manage Tasks <span className="nav-tag">2</span></a></li>
									<li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
									<li><a href="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></a></li>
									<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
								</ul>	
							</li>
						</ul>

						<ul data-submenu-title="Account">
							<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
							<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
						</ul>
						
					</div>
				</div>
				

			</div>
		</div>
	</div>
	


	
	<div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
			
			
			<div className="dashboard-headline">
				<h3>Howdy, Tom!</h3>
				<span>We are glad to see you again!</span>

				
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li>Dashboard</li>
					</ul>
				</nav>
			</div>

			<div className="fun-facts-container">
				<div className="fun-fact" data-fun-fact-color="#36bd78">
					<div className="fun-fact-text">
						<span>Task Bids Won</span>
						<h4>22</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-gavel"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#b81b7f">
					<div className="fun-fact-text">
						<span>Jobs Applied</span>
						<h4>4</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-business-center"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#efa80f">
					<div className="fun-fact-text">
						<span>Reviews</span>
						<h4>28</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-rate-review"></i></div>
				</div>

				
				<div className="fun-fact" data-fun-fact-color="#2a41e6">
					<div className="fun-fact-text">
						<span>This Month Views</span>
						<h4>987</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-feather-trending-up"></i></div>
				</div>
			</div>
			
			
			<div className="row">

				<div className="col-xl-8">
					
					<div className="dashboard-box main-box-in-row">
						<div className="headline">
							<h3><i className="icon-feather-bar-chart-2"></i> Your Profile Views</h3>
							<div className="sort-by">
								<select className="selectpicker hide-tick">
									<option>Last 6 Months</option>
									<option>This Year</option>
									<option>This Month</option>
								</select>
							</div>
						</div>
						<div className="content">
							
							<div className="chart">
								<canvas id="chart" width="100" height="45"></canvas>
							</div>
						</div>
					</div>
					
				</div>
				<div className="col-xl-4">

					
					
					
					<div className="dashboard-box child-box-in-row"> 
						<div className="headline">
							<h3><i className="icon-material-outline-note-add"></i> Notes</h3>
						</div>	

						<div className="content with-padding">
							
							<div className="dashboard-note">
								<p>Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist</p>
								<div className="note-footer">
									<span className="note-priority high">High Priority</span>
									<div className="note-buttons">
										<a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
										<a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
									</div>
								</div>
							</div>
							
							<div className="dashboard-note">
								<p>Extend premium plan for next month</p>
								<div className="note-footer">
									<span className="note-priority low">Low Priority</span>
									<div className="note-buttons">
										<a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
										<a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
									</div>
								</div>
							</div>
							
							<div className="dashboard-note">
								<p>Send payment to David Peterson</p>
								<div className="note-footer">
									<span className="note-priority medium">Medium Priority</span>
									<div className="note-buttons">
										<a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
										<a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
									</div>
								</div>
							</div>
						</div>
							<div className="add-note-button">
								<a href="#small-dialog" className="popup-with-zoom-anim button full-width button-sliding-icon">Add Note <i className="icon-material-outline-arrow-right-alt"></i></a>
							</div>
					</div>
					
				</div>
			</div>
			

			
			<div className="row">

				
				<div className="col-xl-6">
					<div className="dashboard-box">
						<div className="headline">
							<h3><i className="icon-material-baseline-notifications-none"></i> Notifications</h3>
							<button className="mark-as-read ripple-effect-dark" data-tippy-placement="left" title="Mark all as read">
									<i className="icon-feather-check-square"></i>
							</button>
						</div>
						<div className="content">
							<ul className="dashboard-box-list">
								<li>
									<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
									<span className="notification-text">
										<strong>Michael Shannah</strong> applied for a job <a href="#">Full Stack Software Engineer</a>
									</span>
									
									<div className="buttons-to-right">
										<a href="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
									<span className="notification-text">
										<strong>Gilber Allanis</strong> placed a bid on your <a href="#">iOS App Development</a> project
									</span>
									
									<div className="buttons-to-right">
										<a href="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
									<span className="notification-text">
										Your job listing <a href="#">Full Stack Software Engineer</a> is expiring
									</span>
									
									<div className="buttons-to-right">
										<a href="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
									<span className="notification-text">
										<strong>Sindy Forrest</strong> applied for a job <a href="#">Full Stack Software Engineer</a>
									</span>
									
									<div className="buttons-to-right">
										<a href="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-rate-review"></i></span>
									<span className="notification-text">
										<strong>David Peterson</strong> left you a <span className="star-rating no-stars" data-rating="5.0"></span> rating after finishing <a href="#">Logo Design</a> task
									</span>
									
									<div className="buttons-to-right">
										<a href="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				
				<div className="col-xl-6">
					<div className="dashboard-box">
						<div className="headline">
							<h3><i className="icon-material-outline-assignment"></i> Orders</h3>
						</div>
						<div className="content">
							<ul className="dashboard-box-list">
								<li>
									<div className="invoice-list-item">
									<strong>Professional Plan</strong>
										<ul>
											<li><span className="unpaid">Unpaid</span></li>
											<li>Order: #326</li>
											<li>Date: 12/08/2019</li>
										</ul>
									</div>
									
									<div className="buttons-to-right">
										<a href="pages-checkout-page.html" className="button">Finish Payment</a>
									</div>
								</li>
								<li>
									<div className="invoice-list-item">
									<strong>Professional Plan</strong>
										<ul>
											<li><span className="paid">Paid</span></li>
											<li>Order: #264</li>
											<li>Date: 10/07/2019</li>
										</ul>
									</div>
									
									<div className="buttons-to-right">
										<a href="pages-invoice-template.html" className="button gray">View Invoice</a>
									</div>
								</li>
								<li>
									<div className="invoice-list-item">
									<strong>Professional Plan</strong>
										<ul>
											<li><span className="paid">Paid</span></li>
											<li>Order: #211</li>
											<li>Date: 12/06/2019</li>
										</ul>
									</div>
									
									<div className="buttons-to-right">
										<a href="pages-invoice-template.html" className="button gray">View Invoice</a>
									</div>
								</li>
								<li>
									<div className="invoice-list-item">
									<strong>Professional Plan</strong>
										<ul>
											<li><span className="paid">Paid</span></li>
											<li>Order: #179</li>
											<li>Date: 06/05/2019</li>
										</ul>
									</div>
									
									<div className="buttons-to-right">
										<a href="pages-invoice-template.html" className="button gray">View Invoice</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
			

			
			<div className="dashboard-footer-spacer"></div>
			<div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© 2019 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul className="footer-social-links">
					<li>
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			

		</div>
	</div>
	

</div>
    </div>
  )
}

export default Dashboard
