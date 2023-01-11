import React,{useState,useEffect, useContext} from 'react'
import Header from '../../components/Header'
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import ClientContext from '../../context/ClientContext'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FreelancerServicePost() {

	const { user } = useContext(AuthContext);
	var Navigate = useNavigate();


  const categoryList = useSelector((state) => state.listCategory);
  const { category } = categoryList;

  const userdetails = useSelector((state) => state.userProfile);
  const { userprofile,userprofileerror} = userdetails;

  console.log(userprofile,'from post')


    const { register, handleSubmit, formState: { errors } } = useForm({		
        mode: "onChange"
		
    });
    const postService = {
        service_title: {
			required: "Enter a Title" 
		},
        
        Price: {
            required: "Enter min budget.",
       
        },
        skills: {
            required: "Add your skills.",
            pattern: {
                value: /[^@ ]+,[^@ ]{1,}$/,
                message: 'Enter atlest two skills'
            }
        },
        service_description: {
            required: "Enter job Description.",
            minLength: {
                value: 1,
                message: "Description must have at least 20 characters"
            }
       
        },
        img: {
            required: "Add image",

        },
		response_time:{
			required: "Enter response time.",

		},
		language:{
			required: "Enter a language.",

		}
    };

	let serviceSubmit = async (e) => {
		var myDate = new Date();
		console.log(myDate,'its dateeeeeeee')
		const active_membership =userprofile.active_membership
		{active_membership == 'Basic' ? (myDate.setDate(myDate.getDate() + 3))
		: active_membership == 'Standard' ? (myDate.setDate(myDate.getDate() + 6))
		: (myDate.setDate(myDate.getDate() + 10) )}

		const config = {
		  headers: {
			"Content-type": "multipart/form-data",
		  },
		};
		if (active_membership === null) {
			toast.error("You don't have a membership")
			
		}
		else{
			let response = await axios.post(
			"freelancer/postservice/",
			{
				user: user.user_id,
				service_title: e.service_title,
				category: e.category,
				Price: e.Price,
				response_time: e.response_time,
				skills: e.skills,
				language: e.language,
				service_description: e.service_description,
				img: e.img[0],
				expiry_on: myDate,
			},
			config
			);
			console.log(response,'respppppppp')
		
			if (response.data === 200) {
			toast.success("Service Posted")
			Navigate("/freelancer");
		
			console.log("Service Posted");
			}
			else if (response.data.status === 402){

				console.log(response.data.Message)
				toast.warning(response.data.Message)

			}
		}

	  };


  return (
    <>
    <Header/>

    <div className="margin-top-70"></div>
    

		<div className="dashboard-content-inner" >
			
			<div className="dashboard-headline">

				<h3>Add Services</h3>

				<nav id="breadcrumbs" className="dark">
					
				</nav>

			</div>
			
			<div className="row">

            <form onSubmit={handleSubmit(serviceSubmit)} enctype="multipart/form-data">
				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">
						<div className="headline">
							<h3><i className="icon-feather-folder-plus"></i> Job Request Form</h3>
						</div>
                        
						<div className="content with-padding padding-bottom-10">
							<div className="row">

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Service Title</h5>
										<input type="text" className="with-border" placeholder="i will" name="service_title" {...register('service_title', postService.service_title)}/>
                                        <small className="validationerror">{errors?.service_title && errors.service_title.message}</small>
									</div>
                                    
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Category</h5>
                                        <Form.Select aria-label="Default select example selectpicker with-border" name="category" {...register('category', postService.category)}>
                                        <small className="validationerror">{errors?.category && errors.category.message}</small>
										{category?.map((data, id) => {
            							return(
                                        <option key={id} value={data.id}>{data.category_name}</option>
											)})}											
                                        </Form.Select>
									</div>
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Your Price</h5>
										<div className="row">
											<div className="col-xl-12">
												<div className="input-with-icon">
													<input className="with-border" type="text" placeholder="Minimum" name="Price" {...register('Price', postService.Price)}/>
													
                                                    <small className="validationerror">{errors?.Price && errors.Price.message}</small>
												</div>
											</div>
										</div>								
									</div>
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Response Time</h5>
											<div className="keywords-container">
												<div className="keyword-input-container">
													<input type="text" className="keyword-input with-border" placeholder="Enter Response TIme" name="response_time" {...register('response_time', postService.response_time)}/>
													<small className="validationerror">{errors?.response_time && errors.response_time.message}</small>						
												</div>
												<div className="keywords-list">
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
                                </div>
								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Skills</h5>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input type="text" className="keyword-input with-border" placeholder="Add Skills" name="skills" {...register('skills', postService.skills)}/>
                                                <small className="validationerror">{errors?.skills && errors.skills.message}</small>						
											</div>
											<div className="keywords-list">
											<div className="clearfix"></div>
										</div>
									</div>
								</div>
                                </div>
								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Language</h5>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input type="text" className="keyword-input with-border" placeholder="Enter a Language you speak" name="language" {...register('language', postService.language)}/>
                                                <small className="validationerror">{errors?.language && errors.language.message}</small>						
											</div>
											<div className="keywords-list">
											<div className="clearfix"></div>
										</div>
									</div>
								</div>
                                </div>

								<div className="col-xl-12">
									<div className="submit-field">
										<h5>Services Detail</h5>
                                        <textarea name="service_description" cols="2" rows="2" {...register('service_description', postService.service_description)}></textarea>
                                        <small className="validationerror">{errors?.service_description && errors.service_description.message}</small> <br />
                                        <div className="uploadButton margin-top-30">
											<input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple name='img' {...register('img', postService.img)}/>
											<label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
											<span className="uploadButton-file-name">Images or documents that might be helpful in describing your project</span>
										</div>
											<small className="validationerror">{errors?.img && errors.img.message}</small>
										
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-12">
               <input className="button ripple-effect big margin-top-30" type="submit" />
				</div>
            </form>

			</div>
			

			
			<div className="dashboard-footer-spacer"></div>
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
      
    </>
  )
}

export default FreelancerServicePost
