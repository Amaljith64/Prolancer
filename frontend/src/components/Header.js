import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios'

const Header = () => {
    const Navigate = useNavigate();
    let {user, logoutUser} = useContext(AuthContext)
    const [isActive, setActive] = useState(false);
    const Swal = require("sweetalert2");


    const userdetails = useSelector((state) => state.userProfile);
    const { userprofile,userprofileerror} = userdetails;

  const toggleClass = () => {
    setActive(!isActive);
  };

  let redirectt = (e) => {
    e.preventDefault()
    if (user?.is_freelancer === true){
        Navigate('/freelancer')
    }
    else{
        Navigate('/')
        console.log('else worked');
    }
  }

  let sentrequest = () =>{

    Swal.fire({
        title:"Are you sure",
        text: "You have filled all details in your Profile",

        icon:"warning",
        showCancelButton:"true",
        confirmButtonColor:"#3085D6",
        cancelButtonColor:"#d33",
        confirmButtonText:"YES,Proceed",
       }).then((result)=>{
        if(result.isConfirmed){
            axios.post(`/client/freelancerrequest/`,{
                'requested_user': user.user_id
            })
            toast.success("Your request has been sent.");
        }
       })

  }

    return (
<div>


<header id="header-container" className="fullwidth dashboard-header not-sticky">

<div id="header">
    <div className="container">
        
        <div className="left-side"> 
            
            <div id="logo">
                <Link onClick={redirectt}><img src="/images/logo.png" alt="" /></Link>
            </div>

            <nav id="navigation">
                <ul id="responsive">

                        <li><Link onClick={redirectt}> Home</Link>
                            
                        </li>


                    
                    {user?.is_freelancer ? 
                    (
                    <li><Link to= '/list_job'>View Jobs</Link>
                                    
                    </li>
                    )
                    :
                    (
                    <li><Link to= '/list_service'>View Services </Link>
                    
                    </li>
                    )
                    }

                    {user?.is_freelancer ? 
                    (
                    <li><Link to='/post_service'>Post Service</Link></li>
                    )
                    :
                    (
                    <li><Link to="/freelancerprofile">View Freelancers </Link></li>
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
                        <Link to=""><div className="user-avatar status-online"><img src={userprofile?.profile_photo}  alt="" /></div></Link>
                    </div>

                    
                    <div className="header-notifications-dropdown">

                        
                        <div className="user-status">

                            
                            <div className="user-details">
                                <Link to='/userprofile'>
                                <div className="user-avatar status-online"><img src={userprofile?.profile_photo} style={{height: '-webkit-fill-available'}} alt="" /></div>
                                </Link>
                                <div className="user-name">
                                {user &&  <h3>Hello <strong> {user.username}</strong></h3>}
                                {user?.is_freelancer ? (<span>Freelancer</span>) : (<span>User</span>)}
                                <span><strong>{userprofile?.active_membership == null ? 'No Membership'
                                : userprofile?.active_membership}</strong></span>
                                </div>
                            </div>
                            <div className="margin-top-30"></div>
                            {user?.is_freelancer ? 
                            (
                           
                            <div className="" id="snackbar-user-status">
                                <Link to='/dashboard' className='button greencolor full-width ' >Dashboard</Link>
                            </div>	
                            )
                            :
                            (
                            <div className="" id="snackbar-user-status">
                                <Link onClick={sentrequest} className='button greencolor full-width ' >Become Freelancer</Link>  
                            </div>	
                            )
                        }
                    </div>
                    
                    <ul className="user-menu-small-nav" style={{float: 'right',
                            marginRight: '10px'}}>
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
