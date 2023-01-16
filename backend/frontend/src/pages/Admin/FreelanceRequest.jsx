import React,{useEffect,useState} from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FreelancerRequest, listcategory,listjobpost,listservicepost } from "../../actions/postActions";
import axios from 'axios';
import { toast } from 'react-toastify';

const FreelanceRequest = () => {
    
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    const freelancerrequest = useSelector((state) => state.freelancerRequest);
	const { freelancerRequestloading, freelancerRequest,freelancerRequesterror } = freelancerrequest;

    console.log(freelancerRequest,'reqqqqqqqqqq')

    let acceptrequest=(id) =>{
        axios.post(`/client/acceptrequest/${id}/`)
        toast.success("Request Accepted")
        setReload(!reload)
    }


    useEffect(() => {
        dispatch(FreelancerRequest())

    }, [reload])
    
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
                            {freelancerRequest?.map((data)=>{
                                return(

                                    <li key={data.id}>
                                
                                <div className="freelancer-overview manage-candidates">
                                    <div className="freelancer-overview-inner">

                                        
                                        <div className="freelancer-avatar">
                                           
                                            <Link to="#"><img src={data.requested_user.profile_photo} alt=""/></Link>
                                        </div>

                                        
                                        <div className="freelancer-name">
                                            <h4><Link to="#">{data.requested_user.username} <img className="flag" data-tippy-placement="top"/></Link></h4>

                                            
                                            <span className="freelancer-detail-item"><Link to="#"><i className="icon-feather-mail"></i> {data.requested_user.email}</Link></span>

                                            
                                           

                                            
                                            <ul className="dashboard-task-info bid-info">
                                                <li><Link onClick={()=>acceptrequest(data.requested_user?.id)}   className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept</Link>
                                                </li>
                                                <li><Link   className="popup-with-zoom-anim button ripple-effect" style={{backgroundColor : '#e82a2c'}}><i className="icon-line-awesome-close"></i> Reject</Link>
                                                </li>
                                               
                                            
                                            </ul>

                                            
                                          
                                        </div>
                                    </div>
                                </div>
                            </li>

                                )
                            })}
                            
                    
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        

        
        <div className="dashboard-footer-spacer"></div>
        
        

    </div>
</div>


</div>
    </div>
  )
}

export default FreelanceRequest