import React,{useContext,useEffect} from 'react'
import Header from '../../components/Header'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { listcategory, listjobpost } from "../../actions/postActions";
import Paginate from '../../components/Paginate';
import { useState } from 'react';
import ClientContext from '../../context/ClientContext'


const JobListing = () => {

const dispatch = useDispatch();

let {searchHandler} = useContext(ClientContext)

const joblist = useSelector((state) => state.jobList);
const { jobpost,jobposterror } = joblist;

const categoryList = useSelector((state) => state.listCategory);
const { loading, category, error } = categoryList;

console.log(category)

const[choosedCategory,setchoosedCategory] = useState(null)

console.log(choosedCategory,'choosedd')

const [searchParams, setSearchParams] = useSearchParams();
const someQueryParam = searchParams.get("keyword");




useEffect(() => {
    console.log('useeffect called')
    setchoosedCategory(null)

    dispatch(listjobpost(searchParams))

}, [searchParams])


    return (
<>
<Header/>
<div className="margin-top-70"></div>
    
<div className="full-page-container">

<div className="full-page-sidebar">
    <div className="full-page-sidebar-inner" data-simplebar>
        <div className="sidebar-container">   
            
            <div className="sidebar-widget">
                <h3>Search</h3>
                <div className="input-with-icon">
                    <div id="autocomplete-container">
                       <SearchBox />
                    </div>
                   
                </div>
            </div> 
            <div className="sidebar-widget">
                <h3>Category</h3>
                <div className="keywords-container">
                    <div className="keyword-input-container">
                    <div className="task-tags">
                        {category?.map((x)=>{
                            return(
                               
						    <span   onClick={()=>searchHandler(x.category_name)} className='margin-left'>{x.category_name}</span>
                            )
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
        <h3 className="page-title">Jobs Availablle</h3>
        {jobpost?.jobs?.filter(jobs => {
            if(choosedCategory === null){
                return jobs?.job_title.includes('')
            }
            else{
                return jobs.category === choosedCategory
            }
        }).map((data,id) => {
            return (
        <div key={data.id} className="listings-container grid-layout margin-top-35">
            
				<Link to={`/view_job/${data.id}`} className="blog-post">
					
					<div className="blog-post-thumbnail">
						<div className="blog-post-thumbnail-inner">
							<span className="blog-item-tag">Tips</span>
							<img src={data.img} alt=""/>
						</div>
					</div>
					<div className="blog-post-content">
						<span className="blog-post-date">22 July 2019</span>
						<h3>{data.job_title}</h3>
						<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
					</div>
					
					<div className="entry-icon"></div>
				</Link>
        </div>
        )})} 
        <div className="clearfix"></div>
    
            <Paginate pages={jobpost?.pages} page={jobpost?.page} />
            
    </div>
</div>
</div>      
{/* <Footer /> */}
</>
  )
}

export default JobListing
