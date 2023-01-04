import React, { useState, useEffect, useContext } from "react";
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useDispatch, useSelector } from "react-redux";
import { AllUsers } from '../../actions/postActions';
import { Link } from "react-router-dom"

const FreelancerProfile = () => {

	const alluser = useSelector((state) => state.allUsers);
	const {alluserloading, allusers,alluserserror} = alluser;

	const categoryList = useSelector((state) => state.listCategory);
	const { loading, category, error } = categoryList;

	const dispatch = useDispatch();
	console.log(allusers,'all userss')

	useEffect(() => {

		dispatch(AllUsers())

	  
	}, [])
	


  return (
    <>
      <Header />
      <div className="margin-top-70"></div>

      <div className="full-page-container">
        <div className="full-page-sidebar">
          <div className="full-page-sidebar-inner" data-simplebar>
            <div className="sidebar-container">
              <div className="sidebar-widget">
                <h3>Search</h3>
                <div className="input-with-icon">
                  <div id="autocomplete-container">
                    {/* <ServiceSearch /> */}
                  </div>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3>Category</h3>
                <div className="keywords-container">
                  <div className="keyword-input-container">
                    <div className="task-tags">
                      {category?.map((x) => {
                        return (
                          <span
                            // onClick={() =>
                            //   servicesearchHandler(x.category_name)
                            // }
                            className="margin-left"
                          >
                            {x.category_name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="keywords-list">
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-page-content-container" data-simplebar>
          <div className="full-page-content-inner">
            <h3 className="page-title">Freelancers</h3>
           

        
{
	alluserloading ? <div className="loadingspinner"></div>
	: alluserserror ? <h3>{alluserserror}</h3>
	:
	<div className="freelancers-container freelancers-list-layout compact-list margin-top-35">
		{allusers?.map((data,id)=>{
			return(

	<div key={data.id} className="freelancer">

		
		<div className="freelancer-overview">
			<div className="freelancer-overview-inner">
				
				
				<span className="bookmark-icon"></span>
				
				
				<div className="freelancer-avatar">
					<div className="verified-badge"></div>
					<Link to={`/profile/${data.id}`}><img src={data.profile_photo} alt=""/></Link>
				</div>
				

				
				<div className="freelancer-name">
					<h4><Link to="#">{data.username} <img className="flag" src={"images/flags/gb.svg"} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
					<span>UI/UX Designer</span>
					
					<div className="freelancer-rating">
						<div className="star-rating" data-rating="4.9"></div>
					</div>
				</div>
			</div>
		</div>
		
		
		<div className="freelancer-details">
			<div className="freelancer-details-list">
				<ul>
					<li>Location <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
					<li>Rate <strong>$60 / hr</strong></li>
					<li>Job Success <strong>95%</strong></li>
				</ul>
			</div>
			<Link to="" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></Link>
		</div>
	</div>
	)})}		

</div>

}

          

            <div className="clearfix"></div>

            <div className="clearfix"></div>
            {/* <Paginate pages={servicepost?.pages} page={servicepost?.page} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FreelancerProfile
