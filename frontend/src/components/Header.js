import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../App.css'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
    return (
<div>

<header id="header-container" className="fullwidth dashboard-header not-sticky">

<div id="header">
    <div className="container">
        
        <div className="left-side"> 
            
            <div id="logo">
                <a href="index.html"><img src="images/logo.png" alt="" /></a>
            </div>

            <nav id="navigation">
                <ul id="responsive">

                    <li><a href="#">Home</a>
                        <ul className="dropdown-nav">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li><a href="index-3.html">Home 3</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Find Work</a>
                        <ul className="dropdown-nav">
                            <li><a href="#">Browse Jobs</a>
                                <ul className="dropdown-nav">
                                    <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                                    <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                                    <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Browse Tasks</a>
                                <ul className="dropdown-nav">
                                    <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                                    <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                                    <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                                </ul>
                            </li>
                            <li><a href="browse-companies.html">Browse Companies</a></li>
                            <li><a href="single-job-page.html">Job Page</a></li>
                            <li><a href="single-task-page.html">Task Page</a></li>
                            <li><a href="single-company-profile.html">Company Profile</a></li>
                        </ul>
                    </li>

                    <li><a href="#">For Employers</a>
                        <ul className="dropdown-nav">
                            <li><a href="#">Find a Freelancer</a>
                                <ul className="dropdown-nav">
                                    <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                                    <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                                    <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                                    <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                                </ul>
                            </li>
                            <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                            <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                            <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="current">Dashboard</a>
                        <ul className="dropdown-nav">
                            <li><a href="dashboard.html">Dashboard</a></li>
                            <li><a href="dashboard-messages.html">Messages</a></li>
                            <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                            <li><a href="dashboard-reviews.html">Reviews</a></li>
                            <li><a href="dashboard-manage-jobs.html">Jobs</a>
                                <ul className="dropdown-nav">
                                    <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                                    <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                                    <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                </ul>
                            </li>
                            <li><a href="dashboard-manage-tasks.html">Tasks</a>
                                <ul className="dropdown-nav">
                                    <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                                    <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                                    <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                                    <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                </ul>
                            </li>
                            <li><a href="dashboard-settings.html">Settings</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Pages</a>
                        <ul className="dropdown-nav">
                            <li>
                                <a href="#">Open Street Map</a>
                                <ul className="dropdown-nav">
                                    <li><a href="jobs-list-layout-full-page-map-OpenStreetMap.html">Full Page List + Map</a></li>
                                    <li><a href="jobs-grid-layout-full-page-map-OpenStreetMap.html">Full Page Grid + Map</a></li>
                                    <li><a href="single-job-page-OpenStreetMap.html">Job Page</a></li>
                                    <li><a href="single-company-profile-OpenStreetMap.html">Company Profile</a></li>
                                    <li><a href="pages-contact-OpenStreetMap.html">Contact</a></li>
                                    <li><a href="jobs-list-layout-1-OpenStreetMap.html">Location Autocomplete</a></li>
                                </ul>
                            </li>
                            <li><a href="pages-blog.html">Blog</a></li>
                            <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                            <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                            <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                            <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                            <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                            <li><a href="pages-login.html">Login & Register</a></li>
                            <li><a href="pages-404.html">404 Page</a></li>
                            <li><a href="pages-contact.html">Contact</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <div className="clearfix"></div>
            
            
        </div>
        
        <div className="right-side">

            
            <div className="header-widget hide-on-mobile">
                
                
                <div className="header-notifications">

                    
                    <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-bell"></i><span>4</span></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        <div className="header-notifications-headline">
                            <h4>Notifications</h4>
                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                <i className="icon-feather-check-square"></i>
                            </button>
                        </div>

                        <div className="header-notifications-content">
                            <div className="header-notifications-scroll" data-simplebar>
                                <ul>
                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-bidders.html">
                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                            <span className="notification-text">
                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-jobs.html">
                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                            <span className="notification-text">
                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                            </span>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a href="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                
                
                <div className="header-notifications">
                    <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-mail"></i><span>3</span></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        <div className="header-notifications-headline">
                            <h4>Messages</h4>
                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                <i className="icon-feather-check-square"></i>
                            </button>
                        </div>

                        <div className="header-notifications-content">
                            <div className="header-notifications-scroll" data-simplebar>
                                <ul>
                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>David Peterson</strong>
                                                <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                                <span className="color">4 hours ago</span>
                                            </div>
                                        </a>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>Sindy Forest</strong>
                                                <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </a>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <a href="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>Marcin Kowalski</strong>
                                                <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                </div>

            </div>
            

            
            <div className="header-widget" onClick={toggleClass}>

                
                <div className= {isActive ? 'header-notifications user-menu active': "header-notifications user-menu"}>
                    <div className="header-notifications-trigger">
                        <a href="#"><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div></a>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        
                        <div className="user-status">

                            
                            <div className="user-details">
                                <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div>
                                <div className="user-name">
                                {user &&  <p>Hello {user.username}</p>}
                                    <span>Freelancer</span>
                                </div>
                            </div>
                            
                            
                            <div className="" id="snackbar-user-status">
                                <Link to='' className='button greencolor full-width margin-top-20' >Become Freelancer</Link>
                                
                                
                           
                            </div>	
                    </div>
                    
                    <ul className="user-menu-small-nav">
                        <li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                        <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
                        <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                    </ul>

                    </div>
                </div>

            </div>
            

            
            <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </span>

        </div>
        

    </div>
</div>


</header>





            <Link to="/" >Home</Link>
            <span> | </span>
            {user ? (
                 <p  onClick={logoutUser}>Logout</p>
            ): (
                <Link to="/login" >Login</Link>
            )}
           
            {user &&   <p>Hello {user.username}</p>}
           
        </div>
    )
}

export default Header
