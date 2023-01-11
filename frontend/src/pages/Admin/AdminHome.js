import React, {useState, useEffect, useContext,useRef } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreelancerRequest, listcategory,listjobpost,listservicepost } from "../../actions/postActions";
import AuthContext from '../../context/AuthContext'



const AdminHome = () => {
    const dispatch = useDispatch();

	let {user, logoutUser} = useContext(AuthContext)


    const servicelist = useSelector((state) => state.serviceList);
    const { servicepost,serviceposterror} = servicelist;

    const joblist = useSelector((state) => state.jobList);
    const { jobpost,jobposterror} = joblist;

	const freelancerrequest = useSelector((state) => state.freelancerRequest);
	const { freelancerRequestloading, freelancerRequest,freelancerRequesterror } = freelancerrequest;
	console.log(freelancerRequest,'freelancer')
    
    useEffect(() => {
        dispatch(listservicepost());
        dispatch(listjobpost());
		dispatch(FreelancerRequest())
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
				<h3>Howdy, {user.username}!</h3>
				<span>We are glad to see you again!</span>

				
				<nav id="breadcrumbs" className="dark">
					
				</nav>
			</div>
	
			
			
	
			<div className="dashboard-footer-spacer"></div>
			
		</div>
	</div>

</div>

</div>

      
    </>
  )
}

export default AdminHome
