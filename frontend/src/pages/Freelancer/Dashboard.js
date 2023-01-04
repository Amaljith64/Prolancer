import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import FreelancerSidebar from '../../components/FreelancerSidebar'

function Dashboard() {
  return (
    <div>
		<Header />
	  <div className="margin-top-70"></div>

<div className="clearfix"></div>
<div className="dashboard-container">

	
	<FreelancerSidebar/>
	


	
	<div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
			
			
			<div className="dashboard-headline">
				<h3>Howdy, Tom!</h3>
				<span>We are glad to see you again!</span>

				
				<nav id="breadcrumbs" className="dark">
					
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
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
							<div className="dashboard-note">
								<p>Extend premium plan for next month</p>
								<div className="note-footer">
									<span className="note-priority low">Low Priority</span>
									<div className="note-buttons">
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
							
							<div className="dashboard-note">
								<p>Send payment to David Peterson</p>
								<div className="note-footer">
									<span className="note-priority medium">Medium Priority</span>
									<div className="note-buttons">
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
						</div>
							<div className="add-note-button">
								<Link to="#small-dialog" className="popup-with-zoom-anim button full-width button-sliding-icon">Add Note <i className="icon-material-outline-arrow-right-alt"></i></Link>
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
										<strong>Michael Shannah</strong> applied for a job <Link to="#">Full Stack Software Engineer</Link>
									</span>
									
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
									<span className="notification-text">
										<strong>Gilber Allanis</strong> placed a bid on your <Link to="#">iOS App Development</Link> project
									</span>
									
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
									<span className="notification-text">
										Your job listing <Link to="#">Full Stack Software Engineer</Link> is expiring
									</span>
									
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
									<span className="notification-text">
										<strong>Sindy Forrest</strong> applied for a job <Link to="#">Full Stack Software Engineer</Link>
									</span>
									
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-rate-review"></i></span>
									<span className="notification-text">
										<strong>David Peterson</strong> left you a <span className="star-rating no-stars" data-rating="5.0"></span> rating after finishing <Link to="#">Logo Design</Link> task
									</span>
									
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
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
										<Link to="" className="button">Finish Payment</Link>
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
										<Link to="" className="button gray">View Invoice</Link>
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
										<Link to="" className="button gray">View Invoice</Link>
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
										<Link to="" className="button gray">View Invoice</Link>
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
						<Link to="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</Link>
					</li>
					<li>
						<Link to="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</Link>
					</li>
					<li>
						<Link to="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</Link>
					</li>
					<li>
						<Link to="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</Link>
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
