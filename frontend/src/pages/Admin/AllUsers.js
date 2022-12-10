import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'

const AllUsers = () => {
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
            <h3>Manage Users</h3>

            
            <nav id="breadcrumbs" className="dark">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Manage Bidders</li>
                </ul>
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
                                            <a href="#"><img src="images/user-avatar-big-02.jpg" alt=""/></a>
                                        </div>

                                        
                                        <div className="freelancer-name">
                                            <h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top"/></a></h4>

                                            
                                            <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> david@example.com</a></span>

                                            
                                            <div className="freelancer-rating">
                                                <div className="star-rating" data-rating="5.0"></div>
                                            </div>

                                            
                                            <ul className="dashboard-task-info bid-info">
                                                <li><strong>$3,200</strong><span>Fixed Price</span></li>
                                                <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                            </ul>

                                            
                                            <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                <a href="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</a>
                                                <a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
                                                <a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                            </div>
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

export default AllUsers
