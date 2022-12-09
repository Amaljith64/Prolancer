import React,{useContext,useState , useEffect} from 'react'
import { Singleservicepost } from "../../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StarRating from '../../components/StarRating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { format, render, cancel, register } from 'timeago.js';


const SingleService = () => {

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const [reload,setReload] = useState()

	const {user} = useContext(AuthContext)

    const dispatch = useDispatch();
    let { id } = useParams()
    const servicelist = useSelector((state) => state.viewService);
    const { singleservicepost,serviceposterror} = servicelist;

    useEffect(() => {
        dispatch(Singleservicepost(id));		
    },[reload]);
	

	const submitHandler=(e)=>{
		e.preventDefault()
		toast("Review Submitted")
		console.log('Review Submitted')
		console.log(user.user_id,'this is userrr')
		axios.post(`/client/viewsingleservice/${id}/`,{
			'reviewuser': user.user_id,	
			'service': id ,
			"stars":parseInt(e.target.stars.value),
			"title":e.target.title.value,
			"review":e.target.review.value
		},	
		)
		setReload(!reload)
		
		console.log('Reloaded')
	}

	const reviews = singleservicepost?.review


  return (
<>
<Header/>
<ToastContainer />
<div className="margin-top-70"></div>
<div className="single-page-header" data-background-image="/images/single-job.jpg">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="single-page-header-inner">
					<div className="left-side">
						<div className="header-image"><a href="single-company-profile.html"><img src="/images/company-logo-03a.png" alt=""/></a></div>
						<div className="header-details">
							<h3>{singleservicepost?.service.service_title}</h3>
							<h5>Employer Name : {singleservicepost?.service.user}</h5>
							
						</div>
					</div>
					<div className="right-side">
						<div className="salary-box">
							<div className="salary-type">Price</div>
							<div className="salary-amount">₹ {singleservicepost?.service.Price}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



<div className="container">
	<div className="row">
		
		
		<div className="col-xl-8 col-lg-8 content-right-offset">

			<div className="single-page-section">
				<h3 className="margin-bottom-25">Job Description</h3>
				<p>{singleservicepost?.service.service_description}</p>

				<p>{singleservicepost?.service.response_time}</p>

				<p>{singleservicepost?.service.Price}</p>
			</div>
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-thumb-up"></i> Work History and Feedback</h3>
				</div>
				<ul className="boxed-list-ul">
				{singleservicepost?.review.map((data,id) => {
            	return (
					<li key={id}>
						<div className="boxed-list-item">	
							<div className="item-content">
								<h4>{data.title} <span>{data.reviewuser}</span></h4>
								<div className="item-details margin-top-10">
									<div className="ratingbutton" >{data.stars}.0</div>
									<div className="star-raating">
									{data.stars < 1 ? <span  className="star off">&#9733;</span> : <span  className="star on">&#9733;</span>}
									{data.stars < 2 ? <span  className="star off">&#9733;</span> : <span  className="star on">&#9733;</span>}
									{data.stars < 3 ? <span  className="star off">&#9733;</span> : <span  className="star on">&#9733;</span>}
									{data.stars < 4 ? <span  className="star off">&#9733;</span> : <span  className="star on">&#9733;</span>}
									{data.stars < 5 ? <span  className="star off">&#9733;</span> : <span  className="star on">&#9733;</span>}
									
									</div>
									<div className="detail-item"><i className="icon-material-outline-date-range"></i>{data.reviewtime.slice(0,10)} </div>
									{format(data.reviewtime)}
								</div>
								<div className="item-description">
									<p>{data.review} </p>
								</div>

								
							</div>
						</div>
					</li>
					)})} 
					<li>
						<div className="boxed-list-itemm">	
							<div className="item-content">
								<h3>Add Review</h3>
								<span>Your Rating</span>
									<form onSubmit={submitHandler} >
										<div className="feedback-yes-no">
											<div className="leave-rating">
											<StarRating setRating={setRating} setHover={setHover} rating={rating} hover={hover}/>
											</div>
											<input type="hidden" name="stars" value={rating} />
											<input type="text"  placeholder="Add a title." name='title'/>
										<textarea  className="with-border" placeholder="Enter your review.." name="review"  required></textarea>
										</div>
									
								<input className="button full-width button-sliding-icon ripple-effect" type="submit" value="Add Review" />
								</form>
							</div>
						</div>
					</li>				
				</ul>	
				<div className="clearfix"></div>
			</div>
			</div>

		
		<div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">

				<a href="#small-dialog" className="apply-now-button popup-with-zoom-anim">Apply Now <i className="icon-material-outline-arrow-right-alt"></i></a>

					
				
				<div className="sidebar-widget">
					<div className="job-overview">
						<div className="job-overview-headline">Job Summary</div>
						<div className="job-overview-inner">
							<ul>
								<li>
									<i className="icon-material-outline-location-on"></i>
									<span>Location</span>
									<h5>London, United Kingdom</h5>
								</li>
								
								<li>
									<i className="icon-material-outline-local-atm"></i>
									<span>Price</span>
									<h5>₹{singleservicepost?.service.Price}</h5>
								</li>
								<li>
									<i className="icon-material-outline-access-time"></i>
									<span>Date Posted</span>
									<h5>{format(singleservicepost?.service.servicetime)}</h5>
								</li>
							</ul>
						</div>
						
					</div>
				</div>

			</div>
		</div>

	</div>
</div>  


<Footer/>
</>
  )
}

export default SingleService
