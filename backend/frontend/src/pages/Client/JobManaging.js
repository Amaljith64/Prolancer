import React,{useContext} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import AuthContext from '../../context/AuthContext';

const JobManaging = () => {
    const {user} = useContext(AuthContext)

    const joblist = useSelector((state) => state.jobList);
    const { jobpost,jobposterror } = joblist;

    const currentuser = user.user_id

  return (
    <>
    
    <Header/>
        <div className="margin-top-70"></div>
     
	<div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
			
			<div className="dashboard-headline">
				<h3>Manage Jobs</h3>

				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><Link to="">Home</Link></li>
						<li><Link to="">Manage Jobs</Link></li>
					</ul>
				</nav>
			</div>
	
			<div className="row">
			
				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">
					
						<div className="headline">
							<h3><i className="icon-material-outline-assignment"></i> My Jobs</h3>
						</div>

						<div className="content">
							<ul className="dashboard-box-list">
                            {jobpost.filter(user => user.user==currentuser).map((data,id) => (
								<li key={data.id} >
									
									<div className="job-listing width-adjustment">
										<div className="job-listing-details">											
											<div className="job-listing-description">
												<h3 className="job-listing-title"><Link to="#">{data.job_title} </Link> <span className="dashboard-status-button yellow">Expiring</span></h3>												
												<div className="job-listing-footer">
													<ul>
														<li><i className="icon-material-outline-access-time"></i> 23 hours left</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
																	
									<ul className="dashboard-task-info">
										{/* <li><strong>3</strong><span>Bids</span></li> */}
										<li><strong>$22</strong><span>Avg. Bid</span></li>
										<li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
									</ul>
									
									<div className="buttons-to-right always-visible">
										<Link to={`/bidders/${data.id}`} className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Bidders </Link>
										<Link to="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
									</div>
								</li>
                                ))}

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
	
<Footer/>
      
    </>
  )
}

export default JobManaging
