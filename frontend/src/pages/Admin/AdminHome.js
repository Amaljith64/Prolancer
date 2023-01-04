import React, {useState, useEffect, useContext,useRef } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
	
			<div className="dashboard-footer-spacer"></div>
			<div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© 2022 <strong>Prolancer</strong>. All Rights Reserved.
				</div>
				
				<div className="clearfix"></div>
			</div>
		</div>
	</div>

</div>

</div>

      
    </>
  )
}

export default AdminHome
