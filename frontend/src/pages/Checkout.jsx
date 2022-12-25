import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header'
import PaypalCheckOutButton from "./Freelancer/PaypalCheckOutButton";
import { useLocation ,useNavigate } from 'react-router-dom'

import QueryString from 'query-string'

const Checkout = () => {
	const price = useParams().price;
	const Navigate = useNavigate()
	const location = useLocation()


	useEffect(() => {
		window.scrollTo(0, 0);
  
    const values = QueryString.parse(location.search)
    console.log(values)
    if (values.success) {
        Navigate('/success')
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