import React, {useContext,useEffect,useState} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from "react-router-dom";

const LoginPage = () => {

    let {loginUser,googleSignin} = useContext(AuthContext)

	function handleCallbackResponse(response){
		googleSignin(response)
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:"343457976454-bvvnulla58ojkknd3l9jtb5kd10aq8ns.apps.googleusercontent.com",
			callback:handleCallbackResponse
			
		});
		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{ theme: 'outline',size: "large"}
		);
	  
	}, [])

    return (
      
        <div>
        <div id="titlebar" className="gradient">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>Log In</h2>
						<nav id="breadcrumbs" className="dark">
							<ul>
								<li>Home</li>
								<li>Log In</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
        <div className="container">
			<div className="row">
				<div className="col-xl-5 offset-xl-3">

					<div className="login-register-page">
						<div className="welcome-text">
							<h3>We're glad to see you again!</h3>
							<span>Don't have an account? <Link to ='/signup'>Sign Up!</Link></span>
						</div>
						<form onSubmit={loginUser} id="login-form">
							<div className="input-with-icon-left">
								<i className="icon-material-baseline-mail-outline"></i>
								<input type="text" className="input-text with-border" name="email" id="emailaddress"
									placeholder="Email Address" required />
							</div>
							<div className="input-with-icon-left">
								<i className="icon-material-outline-lock"></i>
								<input type="password" className="input-text with-border" name="password" id="password"
									placeholder="Password" required />
							</div>
							{/* <Link className="forgot-password">Forgot Password?</Link> */}
						</form>
						<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit"
							form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>

						<div className="social-login-separator"><span>or</span></div>
						<div className="social-login-buttons" style={{justifyContent: 'center'}}>
						<div id="signInDiv"></div>

						</div>
					</div>
				</div>
			</div>
		</div>
       
        </div>
  
       
    )
}

export default LoginPage
