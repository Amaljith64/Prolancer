import React from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
        <Header/>
    <div className="margin-top-70"></div>
    
<div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Contact</h2>

				
				<nav id="breadcrumbs" className="dark">
					
				</nav>

			</div>
		</div>
	</div>
</div>


<div className="container">
	<div className="row">
		<div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">

			<section id="contact" className="margin-bottom-60">
				<h3 className="headline margin-top-15 margin-bottom-35">Any questions? Feel free to contact us!</h3>

				<form method="post" name="contactform" id="contactform" autocomplete="on">
					<div className="row">
						<div className="col-md-6">
							<div className="input-with-icon-left">
								<input className="with-border" name="name" type="text" id="name" placeholder="Your Name" required="required" />
								<i className="icon-material-outline-account-circle"></i>
							</div>
						</div>

						<div className="col-md-6">
							<div className="input-with-icon-left">
								<input className="with-border" name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
								<i className="icon-material-outline-email"></i>
							</div>
						</div>
					</div>

					<div className="input-with-icon-left">
						<input className="with-border" name="subject" type="text" id="subject" placeholder="Subject" required="required" />
						<i className="icon-material-outline-assignment"></i>
					</div>

					<div>
						<textarea className="with-border" name="comments" cols="40" rows="5" id="comments" placeholder="Message" spellcheck="true" required="required"></textarea>
					</div>

					<input type="submit" className="submit button margin-top-15" id="submit" defaultValue="Submit Message" />

				</form>
			</section>

		</div>

	</div>
</div>

      
    </div>
  )
}

export default Contact
