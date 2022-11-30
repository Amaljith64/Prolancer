import React,{useState} from 'react'
import Header from '../../components/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const SIngleJob = () => {

    


  return (
    <>
 
    <Header/>
    <div className="margin-top-70"></div>
    
<div className="single-page-header" data-background-image="images/single-job.jpg">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="single-page-header-inner">
					<div className="left-side">
						<div className="header-image"><a href="single-company-profile.html"><img src="images/company-logo-03a.png" alt=""/></a></div>
						<div className="header-details">
							<h3>Restaurant General Manager</h3>
							<h5>About the Employer</h5>
							<ul>
								<li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> King</a></li>
								<li><div className="star-rating" data-rating="4.9"></div></li>
								<li><img className="flag" src="images/flags/gb.svg" alt=""/> United Kingdom</li>
								<li><div className="verified-badge-with-title">Verified</div></li>
							</ul>
						</div>
					</div>
					<div className="right-side">
						<div className="salary-box">
							<div className="salary-type">Annual Salary</div>
							<div className="salary-amount">$35k - $38k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



<div className="container">
	<div className="row">
		
		
		<div className="col-xl-8 col-lg-8 content-right-offset">

			<div className="single-page-section">
				<h3 className="margin-bottom-25">Job Description</h3>
				<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

				<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>

				<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
			</div>

			<div className="single-page-section">
				<h3 className="margin-bottom-30">Location</h3>
				<div id="single-job-map-container">
					<div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095" data-map-icon="im im-icon-Hamburger"></div>
					<a href="#" id="streetView">Street View</a>
				</div>
			</div>

			<div className="single-page-section">
				<h3 className="margin-bottom-25">Similar Jobs</h3>

				
				<div className="listings-container grid-layout">

						
						<a href="#" className="job-listing">

							
							<div className="job-listing-details">
								
								<div className="job-listing-company-logo">
									<img src="images/company-logo-02.png" alt=""/>
								</div>

								
								<div className="job-listing-description">
									<h4 className="job-listing-company">Coffee</h4>
									<h3 className="job-listing-title">Barista and Cashier</h3>
								</div>
							</div>

							
							<div className="job-listing-footer">
								<ul>
									<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i className="icon-material-outline-business-center"></i> Full Time</li>
									<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
									<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</a>

						
						<a href="#" className="job-listing">

							
							<div className="job-listing-details">
								
								<div className="job-listing-company-logo">
									<img src="images/company-logo-03.png" alt=""/>
								</div>

								
								<div className="job-listing-description">
									<h4 className="job-listing-company">King <span className="verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h4>
									<h3 className="job-listing-title">Restaurant Manager</h3>
								</div>
							</div>

							
							<div className="job-listing-footer">
								<ul>
									<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i className="icon-material-outline-business-center"></i> Full Time</li>
									<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
									<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</a>
					</div>
					

				</div>
		</div>
		

		
		<div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">
            


            <div className="">

			
			
			
			<Tabs className="tabs">
				<TabList className="tabs-header">
					
						<Tab className="active">Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					
					
					
				</TabList>
				
				
                <TabPanel >
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring</p>
                </TabPanel>
                <TabPanel >
                    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                </TabPanel>
                <TabPanel >
                    <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                    <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                </TabPanel>
				
			</Tabs>
			
		</div>
        <div className="margin-top-30"></div>
				<div className="sidebar-widget">
					<div className="job-overview">
						<div className="job-overview-headline">Job Summary</div>
						<div className="job-overview-inner">
							<ul>
								<li>
									<i className="icon-material-outline-location-on"></i>
									<span>Location</span>
									<h5>London, United Kingdom</h5>
								</li>
								<li>
									<i className="icon-material-outline-business-center"></i>
									<span>Job Type</span>
									<h5>Full Time</h5>
								</li>
								<li>
									<i className="icon-material-outline-local-atm"></i>
									<span>Salary</span>
									<h5>$35k - $38k</h5>
								</li>
								<li>
									<i className="icon-material-outline-access-time"></i>
									<span>Date Posted</span>
									<h5>2 days ago</h5>
								</li>
							</ul>
						</div>
					</div>
				</div>

				
				<div className="sidebar-widget">
					<h3>Bookmark or Share</h3>

					
					<button className="bookmark-button margin-bottom-25">
						<span className="bookmark-icon"></span>
						<span className="bookmark-text">Bookmark</span>
						<span className="bookmarked-text">Bookmarked</span>
					</button>

					
					<div className="copy-url">
						<input id="copy-url" type="text" value="" className="with-border" />
						<button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
					</div>

					
					<div className="share-buttons margin-top-25">
						<div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
						<div className="share-buttons-content">
							<span>Interesting? <strong>Share It!</strong></span>
							<ul className="share-buttons-icons">
								<li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
								<li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
								<li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
								<li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</div>

      
    </>
  )
}

export default SIngleJob
