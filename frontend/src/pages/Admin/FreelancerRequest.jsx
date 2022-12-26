import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { Link } from "react-router-dom";

const FreelancerRequest = () => {
  return (
    <div>
      <div id="wrapper"></div> 
    <AdminHeader/>
    <div className="clearfix"></div>
    <div className="dashboard-container">

<AdminSidebar/>

<div className="dashboard-content-container" data-simplebar>
    <div className="dashboard-content-inner" >
        
        
        <div className="dashboard-headline">
            <h3>Manage Users</h3>

            
            <nav id="breadcrumbs" className="dark">
                
            </nav>
        </div>

        
        <div className="row">

            
            <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">

                    <div className="content">
                        <ul className="dashboard-box-list">
                            <li>
                                
                                <div className="freelancer-overview manage-candidates">
                                    <div className="freelancer-overview-inner">

                                        
                                        <div className="freelancer-avatar">
                                            <div className="verified-badge"></div>
                                            <Link to="#"><img src="images/user-avatar-big-02.jpg" alt=""/></Link>
                                        </div>

                                        
                                        <div className="freelancer-name">
                                            <h4><Link to="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top"/></Link></h4>

                                            
                                            <span className="freelancer-detail-item"><Link to="#"><i className="icon-feather-mail"></i> david@example.com</Link></span>

                                            
                                           

                                            
                                            <ul className="dashboard-task-info bid-info">
                                                <li><Link to="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept</Link>
                                                </li>
                                                <li><Link to="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect" style={{backgroundColor : '#e82a2c'}}><i className="icon-line-awesome-close"></i> Reject</Link>
                                                </li>
                                               
                                            
                                            </ul>

                                            
                                          
                                        </div>
                                    </div>
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


</div>
    </div>
  )
}

export default FreelancerRequest
