import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from "react-redux";


const AllPosts = () => {


    const joblist = useSelector((state) => state.jobList);
    const { jobpost,jobposterror} = joblist;



  return (
    <>
   <div id="wrapper"></div> 
    <AdminHeader/>
    <div className="clearfix"></div>
    <div className="dashboard-container">

<AdminSidebar/>

<div className="dashboard-content-container" data-simplebar>
    <div className="dashboard-content-inner" >
        
        
        <div className="dashboard-headline">
            <h3>Manage Posts</h3>

            
            <nav id="breadcrumbs" className="dark">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Manage Jobs</li>
                </ul>
            </nav>
        </div>

        
        <div className="row">

            
            <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">

                    
                    <div className="headline">
                        <h3><i className="icon-material-outline-business-center"></i> Post Listings</h3>
                    </div>

                    <div className="content">
                        <ul className="dashboard-box-list">
                            <li>
                                
                                <div className="job-listing">

                                    
                                    <div className="job-listing-details">
											<a href="#" className="job-listing-company-logo">
                                            <img src="images/company-logo-05.png" alt=""/>
                                        </a> 

                                        
                                        <div className="job-listing-description">
                                            <h3 className="job-listing-title"><a href="#">Frontend React Developer</a> <span className="dashboard-status-button green">Pending Approval</span></h3>

                                            
                                            <div className="job-listing-footer">
                                                <ul>
                                                    <li><i className="icon-material-outline-date-range"></i> Posted on 10 July, 2019</li>
                                                    <li><i className="icon-material-outline-date-range"></i> Expiring on 10 August, 2019</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="buttons-to-right always-visible">
                                    <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Candidates <span className="button-info">0</span></a>
                                    <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                                    <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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
      
    </>
  )
}

export default AllPosts
