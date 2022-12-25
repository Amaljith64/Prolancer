import React,{useContext,useState , useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { SingleUsers } from '../actions/postActions';
import { Link } from "react-router-dom";


export const Profile = () => {

	const dispatch = useDispatch();

	const singleuser = useSelector((state) => state.singleUser);
	const {singleuserloading, singleusers,singleuserserror} = singleuser;

	console.log(singleusers,'singleeeeeeeeeee')

	let { id } = useParams()
	console.log(id,'idddddddddd')

	useEffect(() => {
        dispatch(SingleUsers(id));		
    },[]);

  return (
    <>
    <Header/>
    <div className="margin-top-70"></div>

<div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="single-page-header-inner">
					<div className="left-side">
						<div className="header-image freelancer-avatar "><img src="/images/user-avatar-big-02.jpg" alt=""/></div>
						<div className="header-details">
							<h3>{singleusers?.username} <span>iOS Expert + Node Dev</span></h3>
							<ul>
								<li><div className="star-rating" data-rating="5.0"></div></li>
								<li><img className="flag" src="/images/flags/de.svg" alt=""/> Germany</li>
								<li><div className="verified-badge-with-title">Verified</div></li>
							</ul>
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
				<h3 className="margin-bottom-25">About Me</h3>
				<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

				<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
			</div>

			
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-thumb-up"></i> Work History and Feedback</h3>
				</div>
				<ul className="boxed-list-ul">
					
					<li>
						<div className="boxed-list-item">
							
							<div className="item-content">
								<h4>Fix Python Selenium Code <span>Rated as Employer</span></h4>
								<div className="item-details margin-top-10">
									<div className="star-rating" data-rating="5.0"></div>
									<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2019</div>
								</div>
								<div className="item-description">
									<p>I was extremely impressed with the quality of work AND how quickly he got it done. He then offered to help with another side part of the project that we didn't even think about originally.</p>
								</div>
							</div>
						</div>
					</li>
					
				</ul>

				
				<div className="clearfix"></div>
				<div className="pagination-container margin-top-40 margin-bottom-10">
					<nav className="pagination">
						<ul>
							<li><Link to="#" className="ripple-effect current-page">1</Link></li>
							<li><Link to="#" className="ripple-effect">2</Link></li>
							<li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
						</ul>
					</nav>
				</div>
				<div className="clearfix"></div>
				
			</div>
			
			
			
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-business"></i> Employment History</h3>
				</div>
				<ul className="boxed-list-ul">
					<li>
						<div className="boxed-list-item">
							
							<div className="item-image">
								<img src="/images/browse-companies-03.png" alt=""/>
							</div>
							
							
							<div className="item-content">
								<h4>Development Team Leader</h4>
								<div className="item-details margin-top-7">
									<div className="detail-item"><Link to="#"><i className="icon-material-outline-business"></i> Acodia</Link></div>
									<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2019 - Present</div>
								</div>
								<div className="item-description">
									<p>Focus the team on the tasks at hand or the internal and external customer requirements.</p>
								</div>
							</div>
						</div>
					</li>
					
				</ul>
			</div>
			
		</div>
		
		<div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">
				
				
				<div className="profile-overview">
					<div className="overview-item"><strong>$35</strong><span>Hourly Rate</span></div>
					<div className="overview-item"><strong>53</strong><span>Jobs Done</span></div>
					<div className="overview-item"><strong>22</strong><span>Rehired</span></div>
				</div>

				<Link to="#small-dialog" className="apply-now-button popup-with-zoom-anim margin-bottom-50">Make an Offer <i className="icon-material-outline-arrow-right-alt"></i></Link>

				<div className="sidebar-widget">
					<div className="freelancer-indicators">

						
						<div className="indicator">
							<strong>88%</strong>
							<div className="indicator-bar" data-indicator-percentage="88"><span></span></div>
							<span>Job Success</span>
						</div>

						
						<div className="indicator">
							<strong>100%</strong>
							<div className="indicator-bar" data-indicator-percentage="100"><span></span></div>
							<span>Recommendation</span>
						</div>
						
						
						<div className="indicator">
							<strong>90%</strong>
							<div className="indicator-bar" data-indicator-percentage="90"><span></span></div>
							<span>On Time</span>
						</div>	
											
						
						<div className="indicator">
							<strong>80%</strong>
							<div className="indicator-bar" data-indicator-percentage="80"><span></span></div>
							<span>On Budget</span>
						</div>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Social Profiles</h3>
					<div className="freelancer-socials margin-top-25">
						<ul>
							<li><Link to="#" title="Dribbble" data-tippy-placement="top"><i className="icon-brand-dribbble"></i></Link></li>
							<li><Link to="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></Link></li>
							<li><Link to="#" title="Behance" data-tippy-placement="top"><i className="icon-brand-behance"></i></Link></li>
							<li><Link to="#" title="GitHub" data-tippy-placement="top"><i className="icon-brand-github"></i></Link></li>
						
						</ul>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Skills</h3>
					<div className="task-tags">
						<span>iOS</span>
						<span>Android</span>
						<span>mobile apps</span>
						<span>design</span>
						<span>Python</span>
						<span>Flask</span>
						<span>PHP</span>
						<span>WordPress</span>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Attachments</h3>
					<div className="attachments-container">
						<Link to="#" className="attachment-box ripple-effect"><span>Cover Letter</span><i>PDF</i></Link>
						<Link to="#" className="attachment-box ripple-effect"><span>Contract</span><i>DOCX</i></Link>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Bookmark or Share</h3>
					
					<button className="bookmark-button margin-bottom-25">
						<span className="bookmark-icon"></span>
						<span className="bookmark-text">Bookmark</span>
						<span className="bookmarked-text">Bookmarked</span>
					</button>

					<div className="copy-url">
						<input id="copy-url" type="text" value="" className="with-border"/>
						<button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
					</div>

					<div className="share-buttons margin-top-25">
						<div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
						<div className="share-buttons-content">
							<span>Interesting? <strong>Share It!</strong></span>
							<ul className="share-buttons-icons">
								<li><Link to="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></Link></li>
								<li><Link to="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></Link></li>
								<li><Link to="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></Link></li>
								<li><Link to="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</div>



<div className="margin-top-15"></div>
<Footer/>

    </>
  )
}
