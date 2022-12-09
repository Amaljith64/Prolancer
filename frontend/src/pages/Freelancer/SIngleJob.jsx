import React,{useContext,useState , useEffect} from 'react'
import Header from '../../components/Header'
import Form from 'react-bootstrap/Form';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { Singlejobpost } from "../../actions/postActions";
import Footer from '../../components/Footer';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SIngleJob = () => {
const dispatch = useDispatch();
const navigate = useNavigate()

let { id } = useParams()
const [reload,setReload] = useState()
const [quantity, setQuantity] = useState(0)
function increment() {
    //setCount(prevCount => prevCount+=1);
    setQuantity(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setQuantity(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }


  const [value, setValue] = useState(1);

  const handleChange = event => {
    const value = event.target.value;
    setValue(value);
  };

  const {user} = useContext(AuthContext)

console.log(id,'its idddddddddddddd')

const viewjob = useSelector((state) => state.viewJob);
const { singlejobpost,singlejobposterror } = viewjob;

useEffect(() => {
    
	dispatch(Singlejobpost(id));
	

},[reload]);


const submitHandler=(e)=>{
	e.preventDefault()
	toast("Wow so easy!")
	console.log('toast submit')
	axios.post('/freelancer/sentbid/',{
		'clientjob': parseInt(id) ,
		'user': user.user_id,
		
		"bidrate":e.target.bidrate.value,
		"daysrequired":e.target.daysrequired.value
	},	
	)
	setReload(!reload)
	
	  console.log('toast submit')
}

const tosplit = singlejobpost?.service.skill_required

const bids = singlejobpost?.bids
  return (
    <>
    <Header />
	<ToastContainer />
    <div className="margin-top-70"></div>
    
<div className="single-page-header" data-background-image="/images/single-job.jpg">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="single-page-header-inner">
					<div className="left-side">
						<div className="header-image"><Link to="single-company-profile.html"><img src= {singlejobpost?.service.img} alt=""/></Link></div>
						<div className="header-details">
							<h3> {singlejobpost?.service.job_title} </h3>
							<h5> {singlejobpost?.service.user?.username}</h5>							
						</div>
					</div>
					<div className="right-side">
						<div className="salary-box">
							<div className="salary-type">Job Budget</div>
							<div className="salary-amount">₹{singlejobpost?.service.min_budget} - ₹{singlejobpost?.service.max_budget}</div>
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
				<p>{singlejobpost?.service.job_description}</p>
			</div>
			
			<div className="single-page-section">
				<h3>Attachments</h3>
				<div className="attachments-container">
					<a href="#" className="attachment-box ripple-effect"><span>Project Brief</span><i>PDF</i></a>
				</div>
			</div>

		
			<div className="single-page-section">
				<h3>Skills Required</h3>
				<div className="task-tags">
				{tosplit?.split(',').map((x) => {
					return(
					<span style={{ marginInline: "5px"}}>{x}</span>
					 )})}
		
				</div>
			</div>
			<div className="clearfix"></div>
			
					 
		
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-group"></i> Freelancers Bidding</h3>
				</div>
				{bids?.map((x) => {
					return(
				<ul className="boxed-list-ul">
					<li>
						<div className="bid">
						
							<div className="bids-avatar">
								<div className="freelancer-avatar">
									<div className="verified-badge"></div>
									<a href="single-freelancer-profile.html"><img src="/images/user-avatar-big-01.jpg" alt=""/></a>
								</div>
							</div>
							
						
							<div className="bids-content">
							
								<div className="freelancer-name">
									<h4><a href="single-freelancer-profile.html">{x.user.username} </a></h4>
									<div className="item-details margin-top-3">
										<div className="star-rating" data-rating="5.0"></div><br />
										<div className="detail-item"><i className="icon-material-outline-date-range"></i> {x.bidtime.slice(0,10)}</div>
									</div>
									
								</div>
								
					
							</div>
							
						
							
						
							<div className="bids-bid">
								<div className="bid-rate">
									<div className="rate">₹ {x.bidrate} </div>
									<span>in {x.daysrequired} days</span>
								</div>
							</div>
						</div>
					</li>
					
				</ul>
				)})}
			</div>
			

		</div>
		

		
		<div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">
        <div className="margin-top-30"></div>
				
				<div className="countdown green margin-bottom-35">6 days, 23 hours left</div>

				<div className="sidebar-widget">
					<div className="bidding-widget">
						<div className="bidding-headline"><h3>Bid on this job!</h3></div>
						<form onSubmit={submitHandler}>
							<div className="bidding-inner">

								<span className="bidding-detail" >Set your <strong> Rate</strong></span>
								<input

									type="number"
									value={value}
									onChange={handleChange}
									disabled
									name='bidrate'
								/>
								<Form.Range value={value} min={singlejobpost?.service.min_budget} max={singlejobpost?.service.max_budget}  onChange={handleChange} />
								
								
								
								<span className="bidding-detail margin-top-30">Set your <strong>days required</strong></span>

								
								<div className="bidding-fields">
									<div className="bidding-field">
										
										<div className="qtyButtons">
											<div className="qtyDec" onClick={decrement}></div>
											<input type="text" name="daysrequired" value={quantity}  />
											<div className="qtyInc" onClick={increment}></div>
										</div>
									</div>
									
								</div>

								<button type='submit' id="snackbar-place-bid" className="button ripple-effect move-on-hover full-width margin-top-30"><span>Place a Bid</span></button>

							</div>
						</form>
					</div>
				</div>

				
				

			</div>
		</div>

	</div>
</div>
<Footer />

      
    </>
  )
}

export default SIngleJob
