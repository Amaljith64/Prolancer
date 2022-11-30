import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const Navigate = useNavigate();
    let {user, logoutUser} = useContext(AuthContext)
    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  let redirectt = (e) => {
    e.preventDefault()
    if (user.is_freelancer === true){
        Navigate('/freelancer')
    }
    else{
        Navigate('/')
        console.log('else worked');
    }
  }
    return (
<div>


<header id="header-container" className="fullwidth dashboard-header not-sticky">

<div id="header">
    <div className="container">
        
        <div className="left-side"> 
            
            <div id="logo">
                <Link onClick={redirectt}><img src="images/logo.png" alt="" /></Link>
            </div>

            <nav id="navigation">
                <ul id="responsive">

                    <li><Link onClick={redirectt}> Home</Link>
                        
                    </li>

                    <li><Link to="#">Services</Link>
                        
                    </li>

                    <li><Link to="#">Blog</Link>
                        
                    </li>
                    {user?.is_freelancer ? 
                    (
                    <li><Link to= '/list_job'>View Jobs</Link></li>
                    )
                    :
                    (
                    <li><Link to= '/post_job'>Post Job </Link></li>
                    )
                    }

                    {user?.is_freelancer ? 
                    (
                    <li><Link to='/post_service'>Post Service</Link></li>
                    )
                    :
                    (
                    <li><Link to="#">Contact </Link></li>
                    )
                    }

                </ul>
            </nav>
            <div className="clearfix"></div>
            
            
        </div>
        
        <div className="right-side">

            
            <div className="header-widget hide-on-mobile">
                
                
                <div className="header-notifications">

                    
                    <div className="header-notifications-trigger">
                        <Link to="#"><i className="icon-feather-bell"></i><span>4</span></Link>
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
                                        <Link to="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </Link>
                                    </li>

                                    
                                    <li>
                                        <Link to="dashboard-manage-bidders.html">
                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                            <span className="notification-text">
                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                            </span>
                                        </Link>
                                    </li>

                                    
                                    <li>
                                        <Link to="dashboard-manage-jobs.html">
                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                            <span className="notification-text">
                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                            </span>
                                        </Link>
                                    </li>

                                    
                                    <li>
                                        <Link to="dashboard-manage-candidates.html">
                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                            <span className="notification-text">
                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                
                
                <div className="header-notifications">
                    <div className="header-notifications-trigger">
                        <Link to="#"><i className="icon-feather-mail"></i><span>3</span></Link>
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
                                        <Link to="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>David Peterson</strong>
                                                <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                                <span className="color">4 hours ago</span>
                                            </div>
                                        </Link>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <Link to="dashboard-messages.html">
                                            <span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>Sindy Forest</strong>
                                                <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </Link>
                                    </li>

                                    
                                    <li className="notifications-not-read">
                                        <Link to="dashboard-messages.html">
                                            <span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt="" /></span>
                                            <div className="notification-text">
                                                <strong>Marcin Kowalski</strong>
                                                <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                                <span className="color">Yesterday</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Link to="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></Link>
                    </div>
                </div>

            </div>
            

            
            <div className="header-widget" onClick={toggleClass}>

                
                <div className= {isActive ? 'header-notifications user-menu active': "header-notifications user-menu"}>
                    <div className="header-notifications-trigger">
                        <Link to="#"><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div></Link>
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
                                <Link to='/seller_register' className='button greencolor full-width margin-top-20' >Become Freelancer</Link>
                                
                                
                           
                            </div>	
                    </div>
                    
                    <ul className="user-menu-small-nav">
                        <li><Link to="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
                        <li><Link to="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</Link></li>
                        {user ? (
                            
                        
                      
                        <li onClick={logoutUser}><i className="icon-material-outline-power-settings-new"></i> Logout</li>
                        ): (
                        <li> <Link to="/login"><i className="icon-material-outline-power-settings-new"></i> Login</Link> </li>
                        )}
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
           
        </div>
    )
}

export default Header
