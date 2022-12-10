import React, {useState, useEffect, useContext} from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from "react-redux";
import { listcategory,listjobpost,listservicepost } from "../../actions/postActions";



const AdminHome = () => {
    const dispatch = useDispatch();


    const servicelist = useSelector((state) => state.serviceList);
    const { servicepost,serviceposterror} = servicelist;

    const joblist = useSelector((state) => state.jobList);
    const { jobpost,jobposterror} = joblist;
    
    useEffect(() => {
        dispatch(listservicepost());
        dispatch(listjobpost());
      }, []);




  return (
<>
<div id="wrapper">
<AdminHeader/>
<div className="clearfix"></div>

<div className="dashboard-container">
	<AdminSidebar/>

	
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

<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

	
	<div className="sign-in-form">

		<ul className="popup-tabs-nav">
			<li><a href="#tab">Add Note</a></li>
		</ul>

		<div className="popup-tabs-container">

			
			<div className="popup-tab-content" id="tab">
				
				
				<div className="welcome-text">
					<h3>Do Not Forget 😎</h3>
				</div>
					
				
				<form method="post" id="add-note">

					<select className="selectpicker with-border default margin-bottom-20" data-size="7" title="Priority">
						<option>Low Priority</option>
						<option>Medium Priority</option>
						<option>High Priority</option>
					</select>

					<textarea name="textarea" cols="10" placeholder="Note" className="with-border"></textarea>

				</form>
				
				
				<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="add-note">Add Note <i className="icon-material-outline-arrow-right-alt"></i></button>

			</div>

		</div>
	</div>
</div>

      
    </>
  )
}

export default AdminHome
