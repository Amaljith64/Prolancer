import React,{useState,useEffect, useContext} from 'react'
import Header from '../../components/Header'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form";
import ClientContext from '../../context/ClientContext'
import axios from 'axios';

const JobPosting = () => {
	const [category,setCategory] = useState([])
	let {jobSubmit} = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm({		
        mode: "onChange"
    });
    const postJob = {
        job_title: { required: "Name is required" },
        category: {
            required: 'Choose a category.',            
        },
        
        min_budget: {
            required: "Enter min budget.",
       
        },
        max_budget: {
            required: "Enter max budget.",
       
        },
        skill_required: {
            required: "Add skills.",
            pattern: {
                value: /[^@ ]+,[^@ ]{1,}$/,
                message: 'Enter atlest two skills'
            }
       
        },
        job_description: {
            required: "Enter job Description.",
            minLength: {
                value: 1,
                message: "Description must have at least 20 characters"
            }
       
        },
        img: {
            required: "Add image",
            
       
        }
    };

	useEffect(() => {
        axios
          .get("client/")
          .then((response) => setCategory(response.data));
      }, []);
	


  return (
    <>
    <Header/>
    <div className="margin-top-70"></div>
    

		<div className="dashboard-content-inner" >
			
			
			<div className="dashboard-headline">
				<h3>Post a Job</h3>

				
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Dashboard</a></li>
						<li>Post a Job</li>
					</ul>
				</nav>
			</div>
	
			
			<div className="row">

            <form onSubmit={handleSubmit(jobSubmit)} enctype="multipart/form-data">
				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">
						<div className="headline">
							<h3><i className="icon-feather-folder-plus"></i> Job Request Form</h3>
						</div>
                        

						<div className="content with-padding padding-bottom-10">
							<div className="row">

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Project Name</h5>
										<input type="text" className="with-border" placeholder="e.g. build me a website" name="job_title" {...register('job_title', postJob.job_title)}/>
                                        <small className="validationerror">{errors?.job_title && errors.job_title.message}</small>
									</div>
                                    
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Category</h5>
                                        <Form.Select aria-label="Default select example selectpicker with-border" name="category" {...register('category', postJob.category)}>
                                        <small className="validationerror">{errors?.category && errors.category.message}</small>
										{category.map((data, id) => {
            							return(
                                        <option value={data.id}>{data.category_name}</option>
											)})}											
                                        </Form.Select>
									</div>
								</div>

								

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>What is your estimated budget?</h5>
										<div className="row">
											<div className="col-xl-6">
												<div className="input-with-icon">
													<input className="with-border" type="text" placeholder="Minimum" name="min_budget" {...register('min_budget', postJob.min_budget)}/>
													
                                                    <small className="validationerror">{errors?.min_budget && errors.min_budget.message}</small>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="input-with-icon">
													<input className="with-border" type="text" placeholder="Maximum" name="max_budget" {...register('max_budget', postJob.max_budget)}/>
													
                                                    <small className="validationerror">{errors?.max_budget && errors.max_budget.message}</small>
												</div>
											</div>
										</div>
								
									</div>
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>What skills are required?</h5>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input type="text" className="keyword-input with-border" placeholder="Add Skills" name="skill_required" {...register('skill_required', postJob.skill_required)}/>
                                                <small className="validationerror">{errors?.skill_required && errors.skill_required.message}</small>
						
											</div>
											<div className="keywords-list">
											<div className="clearfix"></div>
										</div>

									</div>
								</div>
                                </div>

								<div className="col-xl-12">
									<div className="submit-field">
										<h5>Describe Your Project</h5>
                                        <textarea name="job_description" cols="2" rows="2" {...register('job_description', postJob.job_description)}></textarea>
                                        <small className="validationerror">{errors?.job_description && errors.job_description.message}</small> <br />
                                        <div className="uploadButton margin-top-30">
											<input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple name='img' {...register('img', postJob.img)}/>
											<label className="uploadButton-button ripple-effect" for="upload">Upload Files</label>
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
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			

		</div>


      
    </>
  )
}

export default JobPosting
