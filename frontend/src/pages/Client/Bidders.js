import React,{useContext,useState , useEffect} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';


import { Singlejobpost, Singleservicepost } from "../../actions/postActions";
import axios from 'axios';


const Bidders = () => {
	const [reload,setReload] = useState()
    let { id } = useParams()
    const dispatch = useDispatch();
    const viewjob = useSelector((state) => state.viewJob);
    const { singlejobpost,singlejobposterror } = viewjob;
    useEffect(() => {
    
        dispatch(Singlejobpost(id));
        
    
    },[reload]);
    console.log(singlejobpost,'postttt')

	const submitHandler=(id)=>{
		toast.success("Bid Accepted")
		console.log(id,'bid idd')
		axios.post(`/client/accceptbid/${id}/`)
		setReload(!reload)
	}

	console.log(singlejobpost?.service.bidder,'current status')


  return (

    <>
    <Header/>
    <div className="margin-top-70"></div>
    <div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
			
			
			<div className="dashboard-headline">
				<h3>Manage Bidders</h3>
				<span className="margin-top-7">Bids for <Link to="#">{singlejobpost?.service.job_title}</Link></span>

				
				<nav id="breadcrumbs" className="dark">
				
				</nav>
			</div>
	
			
			<div className="row">
	
				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						
						<div className="headline">
							<h3><i className="icon-material-outline-supervisor-account"></i>  Bidders</h3>
							<div className="sort-by">
								<select className="selectpicker hide-tick">
									<option>Highest First</option>
									<option>Lowest First</option>
									<option>Fastest First</option>
								</select>
							</div>
						</div>

						<div className="content">
							<ul className="dashboard-box-list">
							{singlejobpost?.bids === undefined ? <h4> Empty </h4>
							:	
							<>
                            {singlejobpost?.bids.map((x) => {
							if (singlejobpost?.service.bidder == false){
					        return(
								
								<li>
									<div  className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											
											<div className="freelancer-avatar">
												<div className="verified-badge"></div>
												<Link to="#"><img src="/images/user-avatar-placeholder.png" alt=""/></Link>
											</div>

											
											<div className="freelancer-name">
												<h4><Link to="#">{x.user.username}</Link></h4>

												
												<span className="freelancer-detail-item"><Link to="#"><i className="icon-feather-mail"></i>{x.user.email}</Link></span>
												{/* <span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+48) 123-456-789</span> */}

										
												<ul className="dashboard-task-info bid-info">
													<li><strong>₹ {x.bidrate}</strong><span>Fixed Price</span></li>
													<li><strong>{x.daysrequired}Days</strong><span>Delivery Time</span></li>
												</ul>

												
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
													{x.bidaccepted == false ?
													(<Link onClick={(e)=>submitHandler(x.id)} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</Link>)
													:
													(<Link onClick={(e)=>submitHandler(x.id)} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accepted</Link>)
													}
													<Link to="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</Link>
												</div>
											</div>
										</div>
									</div>
								</li>
                                )
							}
							return (
								
								<li>
									{x.bidaccepted == false ?
									<div style={{opacity: 0.5}} className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											
											<div className="freelancer-avatar">
												<div className="verified-badge"></div>
												<Link to="#"><img src="/images/user-avatar-placeholder.png" alt=""/></Link>
											</div>

											
											<div className="freelancer-name">
												<h4><Link to="#">{x.user.username}</Link></h4>

												
												<span className="freelancer-detail-item"><Link to="#"><i className="icon-feather-mail"></i>{x.user.email}</Link></span>
												{/* <span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+48) 123-456-789</span> */}

										
												<ul className="dashboard-task-info bid-info">
													<li><strong>₹ {x.bidrate}</strong><span>Fixed Price</span></li>
													<li><strong>{x.daysrequired}Days</strong><span>Delivery Time</span></li>
												</ul>

												
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
													{x.bidaccepted == false ?
													(<Link onClick={(e)=>submitHandler(x.id)} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</Link>)
													:
													(<Link oonClick={(e)=>submitHandler(x.id)} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accepted</Link>)
													}
													<Link to="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</Link>
													<Link to="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
												</div>
											</div>
										</div>
									</div>
									:
									<div  className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											
											<div className="freelancer-avatar">
												<div className="verified-badge"></div>
												<Link to="#"><img src="/images/user-avatar-placeholder.png" alt=""/></Link>
											</div>

											
											<div className="freelancer-name">
												<h4><Link to="#">{x.user.username} </Link></h4>

												
												<span className="freelancer-detail-item"><Link to="#"><i className="icon-feather-mail"></i>{x.user.email}</Link></span>
												{/* <span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+48) 123-456-789</span> */}

												
												{/* <div className="freelancer-rating">
													<div className="star-rating" data-rating="5.0"></div>
												</div> */}

												
												<ul className="dashboard-task-info bid-info">
													<li><strong>₹ {x.bidrate}</strong><span>Fixed Price</span></li>
													<li><strong>{x.daysrequired}Days</strong><span>Delivery Time</span></li>
												</ul>

												
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
													{x.bidaccepted == false ?
													(<Link onClick={(e)=>submitHandler(x.id)} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</Link>)
													:
													(<Link onClick={submitHandler} className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accepted</Link>)
													}
													<Link to="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</Link>
													<Link to="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
												</div>
											</div>
										</div>
									</div>
									}
									
								</li>
                                )
							}
							)					
							}
							</>
}
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

export default Bidders
