import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import useAxios from '../../utils/useAxios'
import axios from 'axios';
import Header from '../../components/Header'
import background from '../../assets/images/image.jpg'
import { Link } from 'react-router-dom'
const HomePage = () => {

    const [category,setCategory] = useState([])
    const [job,setJob] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    let api = useAxios()

    useEffect(() => {
        axios.get("client/").then((response) => setCategory(response.data));
        axios.get("client/postjob/").then((response) =>setJob(response.data));
      }, []);


    return (
        <div>
            <Header />
            <div className="intro-banner dark-overlay" style={{
    
                backgroundImage: `url(${background})`}}>
<div className="transparent-header-spacer"></div>

<div className="container">

    <div className="row">
        <div className="col-md-12">
            <div className="banner-headline">
                <h3>
                    <strong>Free  Hire experts freelancers for any job, any time.</strong>
                    <br/>
                    <span>Huge community of designers, developers and creatives ready for your project.</span>
                </h3>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="intro-banner-search-form margin-top-95">
                
                <div className="intro-search-field">
                    <label htmlFor ="intro-keywords" className="field-title ripple-effect">What service are you looking for today?</label>
                    <input id="intro-keywords" type="text" placeholder="e.g. build me a website"/>
                </div>

                
                <div className="intro-search-button">
                    <button className="button ripple-effect">Search</button>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-12">
            <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                    <strong className="counter">1,586</strong>
                    <span>Jobs Posted</span>
                </li>
                <li>
                    <strong className="counter">3,543</strong>
                    <span>Tasks Posted</span>
                </li>
                <li>
                    <strong className="counter">1,232</strong>
                    <span>Freelancers</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>

<div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
<div className="container" style={{ maxWidth :"1393px"}}>
    <div className="row">
    <div className="col-xl-12">
							
				<div className="section-headline margin-top-0 margin-bottom-35">
					<h3>Recent Tasks</h3>
					<a href="tasks-list-layout-1.html" className="headline-link">Browse All Tasks</a>
				</div>
                {job.map((data, id) => {
                return(
								
				<div key={id} className="tasks-list-container compact-list margin-top-35">
					
					<a href="single-task-page.html" className="task-listing">

						
						<div className="task-listing-details">

							
							<div className="task-listing-description">
								<h3 className="task-listing-title">{data.job_title}</h3>
								<ul className="task-icons">
									<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i className="icon-material-outline-access-time"></i> 2 minutes ago</li>
								</ul>
								<div className="task-tags margin-top-15">
									<span>iOS</span>
									<span>Android</span>
									<span>mobile apps</span>
									<span>design</span>
								</div>
							</div>
						</div>
						<div className="task-listing-bid">
							<div className="task-listing-bid-inner">
								<div className="task-offers">
									<strong>$1,000 - $2,500</strong>
									<span>Fixed Price</span>
								</div>
								<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
							</div>
						</div>
					</a>	
				</div>	
                )})}
			</div>      
        </div>
    </div>
</div>

<div className="section padding-top-65 padding-bottom-65">
<div className="container">
    <div className="row">

        <div className="col-xl-12">
            <div className="section-headline centered margin-top-0 margin-bottom-5">
                <h3>How It Works?</h3>
            </div>
        </div>
        
        <div className="col-xl-4 col-md-4">
            <div className="icon-box with-line">
                <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                        <i className="icon-line-awesome-lock"></i>
                        <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                    </div>
                </div>
                <h3>Create an Account</h3>
                <p>Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
            </div>
        </div>

        <div className="col-xl-4 col-md-4">
            <div className="icon-box with-line">
                <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                        <i className="icon-line-awesome-legal"></i>
                        <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                    </div>
                </div>
                <h3>Post a Task</h3>
                <p>Efficiently unleash cross-media information without. Quickly maximize return on investment.</p>
            </div>
        </div>

        <div className="col-xl-4 col-md-4">
            <div className="icon-box">
                <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                        <i className=" icon-line-awesome-trophy"></i>
                        <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                    </div>
                </div>
                <h3>Choose an Expert</h3>
                <p>Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
            </div>
        </div>

    </div>
</div>
</div>

<div className="section gray padding-top-70 padding-bottom-75">
<div className="container">
    <div className="row">

        <div className="col-xl-12">
            <div className="counters-container">
                
                <div className="single-counter">
                    <i className="icon-line-awesome-suitcase"></i>
                    <div className="counter-inner">
                        <h3><span className="counter">1,586</span></h3>
                        <span className="counter-title">Jobs Posted</span>
                    </div>
                </div>

                <div className="single-counter">
                    <i className="icon-line-awesome-legal"></i>
                    <div className="counter-inner">
                        <h3><span className="counter">3,543</span></h3>
                        <span className="counter-title">Tasks Posted</span>
                    </div>
                </div>

                <div className="single-counter">
                    <i className="icon-line-awesome-user"></i>
                    <div className="counter-inner">
                        <h3><span className="counter">2,413</span></h3>
                        <span className="counter-title">Active Members</span>
                    </div>
                </div>

                <div className="single-counter">
                    <i className="icon-line-awesome-trophy"></i>
                    <div className="counter-inner">
                        <h3><span className="counter">99</span>%</h3>
                        <span className="counter-title">Satisfaction Rate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div>

        </div>
    )
}

export default HomePage
