import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../App.css'

const AdminHeader = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
    <div>


<header id="header-container" className="fullwidth dashboard-header not-sticky">

<div id="header">
    <div className="container">
        
        <div className="left-side"> 
            
            <div id="logo">
                <Link><img src="/images/logo.png" alt="" /></Link>
            </div>

            <nav id="navigation">
                
            </nav>
            <div className="clearfix"></div>
           
        </div>
        
        <div className="right-side">
           <div className="header-widget hide-on-mobile">
               
                <div className="header-notifications">
                   
                    <div className="header-notifications-trigger">
                        <Link to="/upcomming"><i className="icon-feather-bell"></i><span>4</span></Link>
                    </div>

                </div>
                         
                <div className="header-notifications">
                    <div className="header-notifications-trigger">
                        <Link to="/upcomming"><i className="icon-feather-mail"></i><span>3</span></Link>
                    </div>

                </div>

            </div>

            <div className="header-widget" onClick={toggleClass}>
              
                <div className= {isActive ? 'header-notifications user-menu active': "header-notifications user-menu"}>
                    <div className="header-notifications-trigger">
                        <Link to="#"><div className="user-avatar status-online"><img src="/images/user-avatar-small-01.jpg" alt="" /></div></Link>
                    </div>
                   
                    <div className="header-notifications-dropdown">
                       
                        <div className="user-status">
                          
                            <div className="user-details">
                                <div className="user-avatar status-online"><img src="/images/user-avatar-small-01.jpg" alt="" /></div>
                                <div className="user-name">
                                {user &&  <span>Hello <strong> {user.username}</strong></span>}
                                {user?.is_freelancer ? (<p>Freelancer</p>) : (<p>User</p>)}
                                </div>
                            </div>
                            
                            <div className="" id="snackbar-user-status">
                                <Link onClick={logoutUser} className='button greencolor full-width ' >Logout</Link>
                            </div>	
                 
                    </div>
                    
                  

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
      
    </>
  )
}

export default AdminHeader
