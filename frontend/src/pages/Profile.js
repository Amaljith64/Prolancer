import React,{useContext,useState , useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { SingleUsers } from '../actions/postActions';
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext'
import Service from '../components/Service'
import Jobs from '../components/Jobs'


export const Profile = () => {

	const { user, profileid,Setprofileid } = useContext(AuthContext)

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
						<div className="header-image freelancer-avatar "><img style={{width: 'inherit'}} src={singleusers?.profile_photo} alt=""/></div>
						<div className="header-details">
							<h3>{singleusers?.username} <span>iOS Expert + Node Dev</span></h3>
							<ul>
								
								<Link onClick={()=> Setprofileid(id)} to='/chat'><div className="">Click to Chat</div></Link>
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
		
		
		<div className="col-xl-12 col-lg-12 content-right-offset">
			
			
			<div className="single-page-section">
				<h3 className="margin-bottom-25">About Me</h3>
				<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

				<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
			</div>

			{singleuser?.is_freelancer === true ? 
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-business"></i>Services Provided</h3>
				</div>
				
				{singleusers?.getservice?.map((data) => {
					return(
						<Service data={data} />
					)
				})}
				
			</div>
			:
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-business"></i>Services Provided</h3>
				</div>
				
				{singleusers?.clientjob?.map((data) => {
					return(
						<Jobs data={data} />
					)
				})}
				
			</div>

			}

			
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
			
			
		</div>
		
	

	</div>
</div>



<div className="margin-top-15"></div>
<Footer/>

    </>
  )
}
