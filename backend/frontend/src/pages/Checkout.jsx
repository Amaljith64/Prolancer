import React,{ useEffect,useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header'
import PaypalCheckOutButton from "./Freelancer/PaypalCheckOutButton";
import { useLocation ,useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext";

import QueryString from 'query-string'
import { toast } from "react-toastify";
import axios from "axios";
import useAxios from '../utils/useAxios'


const Checkout = () => {
	let api = useAxios()
	const Navigate = useNavigate()

	let {user} = useContext(AuthContext)



	const price = useParams().price;
	const id = useParams().id;
	const location = useLocation()


	useEffect(() => {

  
    const values = QueryString.parse(location.search)
    console.log(values,'its valllllllll')
    if (values.success) {
		if (values.type === 'membership'){
			console.log('membership')

			api.post('/client/strpiemembershippayment/',{
				'user': user.user_id,
				'price':price
			  }).then((response)=>{
				Navigate('/success')
			  })


		}

		else if (values.type === 'job'){
			console.log('job')

			api.post('/client/stripejobpayment/',{
				'user': user.user_id,
				'price':price,
				'jobid': parseInt(id),
				'payment_method': 'Stripe'
			  }).then((response)=>{
				Navigate('/success')
			  })


		}
		else if (values.type === 'service'){
			console.log('service')
			api.post('/client/stripeservicepayment/',{
				'user': user.user_id,
				'price':price,
				'getservice': parseInt(id),
				'payment_method': 'Stripe'
			  }).then((response)=>{
				Navigate('/success')
			  })
		}
		
    }

    if (values.canceled) {
        Navigate("/cancelled")
    }
  }, [])

  const VAT = price*(20/100)
  const FinalPrice = parseInt(price) + parseInt(VAT)


  return (
    <div>
        <Header/>
        <div className="margin-top-70"></div>
        
<div className="clearfix"></div>

<div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Checkout</h2>

			</div>
		</div>
	</div>
</div>



<div className="container">
	<div className="row">
		<div className="col-xl-8 col-lg-8 content-right-offset">
				
			<h3>Billing Cycle</h3>

			
			<div className="billing-cycle margin-top-25">

				
				<div className="radio">
					<input id="radio-5" name="radio-payment-type" type="radio" defaultChecked/>
					<label htmlFor="radio-5">
						<span className="radio-label"></span>
						Billed Monthly
						<span className="billing-cycle-details">
							<span className="regular-price-tag">₹{price}.00 / month</span>
						</span>
					</label>
				</div>
			
			
			</div>
			

			
			<h3 className="margin-top-50">Pay Via</h3>

			
			<div className="payment margin-top-30">

				<div className="payment-tab payment-tab-active">
					<div className="payment-tab-trigger margin-top-20">
						<PaypalCheckOutButton  price={FinalPrice}/>
					</div>
					<div className="payment-tab-trigger margin-top-20">
					<form action={`/client/create-checkout-session/`} method="POST">
						<input type="hidden" name="price" value={FinalPrice}/>
						<input type="hidden" name="membership" value='membership'/>

						<button
						type="submit"
						className="btn btn-primary btn-rounded fs-4 margin-bottom-20"
						style={{width: "100%",
							height: "45px",
							borderRadius: "22px",
							backgroundColor: "#55718d",
							color: "white",
							layout: "horizontal",
							shape: "pill" }}
						>
						<strong>Pay with Stripe</strong>
					</button>
      				</form>
					</div>

					
				</div>



			</div>
			
		
			<div className=" margin-top-40 margin-bottom-65"></div>
		</div>


		
		<div className="col-xl-4 col-lg-4 margin-top-0 margin-bottom-60">
			
			
			<div className="boxed-widget summary margin-top-0">
				<div className="boxed-widget-headline">
					<h3>Summary</h3>
				</div>
				<div className="boxed-widget-inner">
					<ul>
						<li>Standard Plan <span>₹{price}</span></li>
						<li>TAX (20%) <span>₹{VAT}</span></li>
						<li className="total-costs">Final Price <span>₹{FinalPrice}</span></li>
					</ul>
				</div>
			</div>
			

			
			
		</div>

	</div>
</div>
<Footer/>

    </div>
  )
}

export default Checkout