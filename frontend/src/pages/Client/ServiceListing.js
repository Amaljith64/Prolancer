import React,{useContext,useEffect,useState} from 'react'
import Header from "../../components/Header";
import Service from "../../components/Service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import ClientContext from '../../context/ClientContext'
import ServiceSearch from '../../components/ServiceSearch';
import { listservicepost } from "../../actions/postActions";
import Paginate from '../../components/Paginate';




const JobListing = () => {

  const dispatch = useDispatch();


  const servicelist = useSelector((state) => state.serviceList);
  const { servicepost, serviceposterror } = servicelist;

  const categoryList = useSelector((state) => state.listCategory);
  const { loading, category, error } = categoryList;

  const[choosedCategory,setchoosedCategory] = useState(null)

  let {servicesearchHandler} = useContext(ClientContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const someQueryParam = searchParams.get("keyword");


  console.log(servicepost, "jhhhhhhhhhhhhhhhhh");

  useEffect(() => {
    console.log('useeffect called')

    setchoosedCategory(null)

    dispatch(listservicepost(searchParams))

}, [searchParams])

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
                       <ServiceSearch/>
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
                               
						    <span   onClick={()=>servicesearchHandler(x.category_name)} className='margin-left'>{x.category_name}</span>
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
            <h3 className="page-title">Search Results</h3>

        

            {servicepost?.service?.map((data, id) => {
              return (
                
                  <Service key={id} data={data} />
               
              );
            })}

            <div className="clearfix"></div>
           
            <div className="clearfix"></div>
            <Paginate pages={servicepost?.pages} page={servicepost?.page} />

           
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
