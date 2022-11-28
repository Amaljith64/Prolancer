import React,{ useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Header from '../components/Header'
import { useForm } from "react-hook-form";

function SignupPage() {
	let {userSignup } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

	const registerOptions = {
        name: { required: "Name is required" },
        email: {
            required: 'Email is required.',
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
  return (
      <div>
        <Header/>
		<div className="margin-top-70"></div>
		
        <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Register</h2>
				
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li>Home</li>
						<li>Register</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>


<div className="container">
	<div className="row ">
		<div className="col-xl-5 offset-xl-3 ">

			<div className="login-register-page ">
				
				<div className="welcome-text">
					<h3 style={{fontsize: "26px"}}>Let's create your account!</h3>
					<span>Already have an account? <Link to='/login'>Log In!</Link></span>
				</div>
					
				
				<form onSubmit={handleSubmit(userSignup)} id="register-account-form">
					<div className="input-with-icon-left">
						<i className="icon-feather-user"></i>
						<input type="text" className="input-text with-border" name="name"  placeholder="Enter Username" required {...register('name', registerOptions.name)}/>
						<small className="text-danger">
							{errors?.name && errors.name.message}
						</small>
					</div>
					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="email"  placeholder="Email Address" required {...register('email', registerOptions.email)}/>
						<small className="text-danger">
							{errors?.email && errors.email.message}
						</small>
					</div>

					<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password"  placeholder="Password" required {...register('password', registerOptions.password)}/>
						<small className="text-danger">
							{errors?.password && errors.password.message}
						</small>
					</div>

					{/* <div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password2" id="password-repeat-register" placeholder="Repeat Password" required/>
					</div> */}
					<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" >Register <i className="icon-material-outline-arrow-right-alt"></i></button>
				</form>
				


				


				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default SignupPage