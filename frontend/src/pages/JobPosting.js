import React,{useState,useEffect, useContext} from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form";
import ClientContext from '../context/ClientContext'
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
    

		<div class="dashboard-content-inner" >
			
			
			<div class="dashboard-headline">
				<h3>Post a Job</h3>

				
				<nav id="breadcrumbs" class="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Dashboard</a></li>
						<li>Post a Job</li>
					</ul>
				</nav>
			</div>
	
			
			<div class="row">

            <form onSubmit={handleSubmit(jobSubmit)} enctype="multipart/form-data">
				<div class="col-xl-12">
					<div class="dashboard-box margin-top-0">
						<div class="headline">
							<h3><i class="icon-feather-folder-plus"></i> Job Request Form</h3>
						</div>
                        

						<div class="content with-padding padding-bottom-10">
							<div class="row">

								<div class="col-xl-6">
									<div class="submit-field">
										<h5>Project Name</h5>
										<input type="text" class="with-border" placeholder="e.g. build me a website" name="job_title" {...register('job_title', postJob.job_title)}/>
                                        <small className="validationerror">{errors?.job_title && errors.job_title.message}</small>
									</div>
                                    
								</div>

								<div class="col-xl-6">
									<div class="submit-field">
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

								

								<div class="col-xl-6">
									<div class="submit-field">
										<h5>What is your estimated budget?</h5>
										<div class="row">
											<div class="col-xl-6">
												<div class="input-with-icon">
													<input class="with-border" type="text" placeholder="Minimum" name="min_budget" {...register('min_budget', postJob.min_budget)}/>
													
                                                    <small className="validationerror">{errors?.min_budget && errors.min_budget.message}</small>
												</div>
											</div>
											<div class="col-xl-6">
												<div class="input-with-icon">
													<input class="with-border" type="text" placeholder="Maximum" name="max_budget" {...register('max_budget', postJob.max_budget)}/>
													
                                                    <small className="validationerror">{errors?.max_budget && errors.max_budget.message}</small>
												</div>
											</div>
										</div>
								
									</div>
								</div>

								<div class="col-xl-6">
									<div class="submit-field">
										<h5>What skills are required?</h5>
										<div class="keywords-container">
											<div class="keyword-input-container">
												<input type="text" class="keyword-input with-border" placeholder="Add Skills" name="skill_required" {...register('skill_required', postJob.skill_required)}/>
                                                <small className="validationerror">{errors?.skill_required && errors.skill_required.message}</small>
						
											</div>
											<div class="keywords-list">
											<div class="clearfix"></div>
										</div>

									</div>
								</div>
                                </div>

								<div class="col-xl-12">
									<div class="submit-field">
										<h5>Describe Your Project</h5>
                                        <textarea name="job_description" cols="2" rows="2" {...register('job_description', postJob.job_description)}></textarea>
                                        <small className="validationerror">{errors?.job_description && errors.job_description.message}</small> <br />
                                        <div class="uploadButton margin-top-30">
											<input class="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple name='img' {...register('img', postJob.img)}/>
											<label class="uploadButton-button ripple-effect" for="upload">Upload Files</label>
											<span class="uploadButton-file-name">Images or documents that might be helpful in describing your project</span>
										</div>
											<small className="validationerror">{errors?.img && errors.img.message}</small>
										
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-12">
               <input class="button ripple-effect big margin-top-30" type="submit" />
				</div>
            </form>

			</div>
			

			
			<div class="dashboard-footer-spacer"></div>
			<div class="small-footer margin-top-15">
				<div class="small-footer-copyrights">
					© 2019 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul class="footer-social-links">
					<li>
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i class="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i class="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i class="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i class="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			

		</div>


      
    </>
  )
}

export default JobPosting
