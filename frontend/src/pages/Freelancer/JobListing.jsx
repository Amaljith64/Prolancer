import React from 'react'
import Header from '../../components/Header'
import { Link } from "react-router-dom";


const JobListing = () => {
  return (
    <>
    <Header/>
    <div className="margin-top-70"></div>
    
<div className="full-page-container">

<div className="full-page-sidebar">
    <div className="full-page-sidebar-inner" data-simplebar>
        <div className="sidebar-container">
            
            
            <div className="sidebar-widget">
                <h3>Location</h3>
                <div className="input-with-icon">
                    <div id="autocomplete-container">
                        <input id="autocomplete-input" type="text" placeholder="Location" />
                    </div>
                    <i className="icon-material-outline-location-on"></i>
                </div>
            </div>

            
            
            <div className="sidebar-widget">
                <h3>Keywords</h3>
                <div className="keywords-container">
                    <div className="keyword-input-container">
                        <input type="text" className="keyword-input" placeholder="e.g. job title"/>
                        <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                    </div>
                    <div className="keywords-list">
                    <div className="clearfix"></div>
                </div>
            </div>
            
            
            <div className="sidebar-widget">
                <h3>Category</h3>
                <select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
                    <option>Admin Support</option>
                    <option>Customer Service</option>
                    <option>Data Analytics</option>
                    <option>Design & Creative</option>
                    <option>Legal</option>
                    <option>Software Developing</option>
                    <option>IT & Networking</option>
                    <option>Writing</option>
                    <option>Translation</option>
                    <option>Sales & Marketing</option>
                </select>
            </div>
            
            
            <div className="sidebar-widget">
                <h3>Job Type</h3>

                <div className="switches-list">
                    <div className="switch-container">
                        <label className="switch"><input type="checkbox" /><span className="switch-button"></span> Freelance</label>
                    </div>

                    <div className="switch-container">
                        <label className="switch"><input type="checkbox" /><span className="switch-button"></span> Full Time</label>
                    </div>

                    <div className="switch-container">
                        <label className="switch"><input type="checkbox" /><span className="switch-button"></span> Part Time</label>
                    </div>

                    <div className="switch-container">
                        <label className="switch"><input type="checkbox" /><span className="switch-button"></span> Internship</label>
                    </div>
                    <div className="switch-container">
                        <label className="switch"><input type="checkbox" /><span className="switch-button"></span> Temporary</label>
                    </div>
                </div>

            </div>

            
            <div className="sidebar-widget">
                <h3>Salary</h3>
                <div className="margin-top-55"></div>

                
                <input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
            </div>

            
            <div className="sidebar-widget">
                <h3>Tags</h3>

                <div className="tags-container">
                    <div className="tag">
                        <input type="checkbox" id="tag1"/>
                        <label for="tag1">front-end dev</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag2"/>
                        <label for="tag2">angular</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag3"/>
                        <label for="tag3">react</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag4"/>
                        <label for="tag4">vue js</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag5"/>
                        <label for="tag5">web apps</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag6"/>
                        <label for="tag6">design</label>
                    </div>
                    <div className="tag">
                        <input type="checkbox" id="tag7"/>
                        <label for="tag7">wordpress</label>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>

        </div>
        

        
        <div className="sidebar-search-button-container">
            <button className="button ripple-effect">Search</button>
        </div>
        

    </div>
</div>
</div>



<div className="full-page-content-container" data-simplebar>
    <div className="full-page-content-inner">

        <h3 className="page-title">Search Results</h3>

        <div className="notify-box margin-top-15">
            <div className="switch-container">
                <label className="switch"><input type="checkbox"/><span className="switch-button"></span><span className="switch-text">Turn on email alerts for this search</span></label>
            </div>

            <div className="sort-by">
                <span>Sort by:</span>
                <select className="selectpicker hide-tick">
                    <option>Relevance</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Random</option>
                </select>
            </div>
        </div>

        <div className="listings-container grid-layout margin-top-35">
            
				<Link to="pages-blog-post.html" className="blog-post">
					
					<div className="blog-post-thumbnail">
						<div className="blog-post-thumbnail-inner">
							<span className="blog-item-tag">Tips</span>
							<img src="images/blog-01a.jpg" alt=""/>
						</div>
					</div>
					
					<div className="blog-post-content">
						<span className="blog-post-date">22 July 2019</span>
						<h3>16 Ridiculously Easy Ways to Find & Keep a Remote Job</h3>
						<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
					</div>
					
					<div className="entry-icon"></div>
				</Link>

            
            

        </div>

        
        <div className="clearfix"></div>
        <div className="pagination-container margin-top-20 margin-bottom-20">
            <nav className="pagination">
                <ul>
                    <li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
                    <li><Link to="#" className="ripple-effect">1</Link></li>
                    <li><Link to="#" className="ripple-effect current-page">2</Link></li>
                    <li><Link to="#" className="ripple-effect">3</Link></li>
                    <li><Link to="#" className="ripple-effect">4</Link></li>
                    <li className="pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
                </ul>
            </nav>
        </div>
        <div className="clearfix"></div>
        

        
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
      
    </>
  )
}

export default JobListing
