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

			{singleusers?.is_freelancer === true ? 
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-business"></i>Services Provided</h3>
				</div>
				
				{singleusers?.getservice?.map((data) => (
						<Service data={data} />
					))
				}
				
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

			
			
			
			
		</div>
		
	

	</div>
</div>



<div className="margin-top-15"></div>
<Footer/>

    </>
  )
}
