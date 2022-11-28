import React,{  useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import AuthContext from '../context/AuthContext';
import axios from "axios"

const RegisterFreelancer = () => {

    
const {user} = useContext(AuthContext)

const Swal=require("sweetalert2")

const [data,setData]=useState({
    user:user.user_id,
    first_name:"",
    lastname:"",
    date_of_birth:null,
    about:"",
    profile_photo:"",
    cv:"", 
    educations:{
        user:user.user_id,
        edufrom:"",
        edutill:"",
        qualification:"",
        edudesc:"",
        collage:"",
    },
    experiences:{
        user:user.user_id,
        occupation:"",
        companyname:"",
        workfrom:"",
        worktill:"",

    },
    
   
})
const onHandlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data,'.............')
    console.log(data.date_of_birth,'dob')
}
const onHandlechangeeducation=(e)=>{
    setData((prevState)=>({...prevState,educations:{...prevState.educations,[e.target.name]:e.target.value}}))
    console.log(data,'.............')
    
}
const onHandlechangework=(e)=>{
    setData((prevState)=>({...prevState,experiences:{...prevState.experiences,[e.target.name]:e.target.value}}))
    console.log(data,'.............')
    
}

const uploadImage = (e)=>{
    console.log(e.target.name,'nnnnnnnnnnnnnnnnnnnnnnn')

    const file = e.target.files[0]
    console.log(file,'uuuuuuuuuuuuuuuuu')
    setData({...data,[e.target.name]:file})
    console.log(data)
}

const uploadData=(e)=>{
    console.log('clickeddddddddddddddd')
    e.preventDefault()
    console.log(data,'data.............................')
  
    const formSent= new FormData()
    for(let key in data){
        console.log(key,'mmmmmmmmmmmmmmm')
        console.log(data[key],'bbbbbbbbbbbbbbbbbbbbbbb')
        formSent.append(key,data[key])
    }
    console.log(formSent,'formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
//    const Authorization=`Bearer ${token.access}`
  axios.post("http://127.0.0.1:8000/api/becomeseller/",formSent).then((response)=>{
    console.log(response.status,'jjjjjjjjjjjjjjjjjjjjj')
           
            console.log('hhhhhhhhhhhhhhhhhhhhhhhh')
            
            Swal.fire({ title:"uploaded",
            
            icon:"success",})
            setData({
                user:"",
                first_name:"",
                lastname:"",
                date_of_birth:"",
                about:"",
                profile_photo:"",
                cv:"",
                educations:{
                    user:"",
                    edufrom:"",
                    edutill:"",
                    qualification:"",
                    edudesc:"",
                    collage:"",
                },
                experiences:{
                    user:"",
                    occupation:"",
                    companyname:"",
                    workfrom:"",
                    worktill:"",
            
                },
            })
        
        
    }).catch((error)=>{
        console.log(error.response.data)
        Swal.fire({ title:error.response.data.message,
            
            icon:"success",})
    })

}
  return (
    <>
    <Header />
    <div class="margin-top-70"></div>

    <div className="dashboard-container">


<div className="dashboard-content-container" data-simplebar>
<form onSubmit={uploadData}  id="usrform" enctype="multipart/form-data">   
    <div className="dashboard-content-inner" >

        <div className="dashboard-headline">
            <h3>Personal Info</h3><br />
            <p>Tell us a bit about yourself. This information will appear on your public profile,<br/>
                 so that potential buyers can get to know you better.</p>
            <nav id="breadcrumbs" className="dark">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Settings</li>
                </ul>
            </nav>
        </div>

        <div className="row">

            <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">

                    <div className="headline">
                        <h3><i className="icon-material-outline-account-circle"></i> My Account</h3>
                    </div>
                    

                    <div className="content with-padding padding-bottom-0">

                        <div className="row">

                            <div className="col-auto">
                                <div className="avatar-wrapper" title="Change Avatar">
                                    <img className="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                                    <div className="upload-button"></div>
                                    <input onChange={uploadImage} name='profile_photo' className="uploadButton-input" type="file" accept="image/*"/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="row">

                                    <div className="col-xl-6">
                                        <div className="submit-field">
                                            <h5>First Name</h5>
                                            <input type="text" name='first_name' className="with-border" onChange={onHandlechange}/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="submit-field">
                                            <h5>Last Name</h5>
                                            <input type="text" name='lastname' className="with-border" onChange={onHandlechange}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="submit-field">
                                            <h5>Date of Birth</h5>
                                            <input type="date" name='date_of_birth' className="with-border" onChange={onHandlechange}/>
                                        </div>
                                    </div>

                                    {/* <div className="col-xl-6">
                                        
                                        <div className="submit-field">
                                            <h5>Account Type</h5>
                                            <div className="account-type">
                                                <div>
                                                    <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" defaultChecked/>
                                                    <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Freelancer</label>
                                                </div>

                                                <div>
                                                    <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio"/>
                                                    <label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Employer</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="col-xl-6">
                                        
                                    </div>
                                    <div className="col-xl-12">
                                    <div className="submit-field">
                                        <h5>Introduce Yourself</h5>

                                        <textarea cols="30" name='about' rows="5" form="usrform" className="with-border" onChange={onHandlechange}></textarea>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-12">
                <div className="dashboard-box">

                    <div className="headline">
                        <h3><i className="icon-material-outline-face"></i> Work and Experience</h3>
                    </div>

                    <div className="content">
                        <ul className="fields-ul">
                        <li>
                            <div className="row">
                            <div className="col-xl-6">
                                        <div className="submit-field">
                                            <h5>Your Occupation</h5>
                                            <input type="text" name='occupation' className="with-border" onChange={onHandlechangework}/>
                                        </div>
                                        <div className="submit-field">
                                        <h5>Job Description</h5>
                                        <textarea cols="30" name='jobdesc'  form="usrform" rows="5" className="with-border" onChange={onHandlechangework}></textarea>
                                        </div>
                                    </div>
                                
                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <h5>Company Name <i className="help-icon" data-tippy-placement="right" title="Add up to 10 skills"></i></h5>
                                        
                                        <div className="keywords-container">
                                            <div className="keyword-input-container">
                                            <input name='companyname' type="text" className="with-border" onChange={onHandlechangework}/>
                                            </div>                                          
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="submit-field">
                                        <h5>Attachments</h5>
                                        
                                        <div className="attachments-container margin-top-0 margin-bottom-0">
                                            <div className="attachment-box ripple-effect">
                                                <span>Cover Letter</span>
                                                <i>PDF</i>
                                                <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                                            </div>
                                            <div className="submit-field">
                                            <h5>From year</h5>
                                            <input type="number"  name='workfrom' className="with-border" onChange={onHandlechangework}/>
                                            <div className="submit-field">
                                            <h5>To year</h5>
                                            <input type="number" name='worktill' className="with-border" onChange={onHandlechangework}/>
                                        </div>
                                        </div>
                                            
                                        </div>
                                        <div className="clearfix"></div>
                                        
                                        <div className="uploadButton margin-top-0">
                                            <input name='cv' onChange={uploadImage}  className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" />
                                            <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
                                            <span className="uploadButton-file-name">Maximum file size: 10 MB</span>

                                            
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                       
                    </ul>
                    </div>
                </div>
            </div>

            <div className="col-xl-12">
                <div className="dashboard-box">

                    <div className="headline">
                        <h3><i className="icon-material-outline-face"></i>Education</h3>
                    </div>

                    <div className="content">
                        <ul className="fields-ul">
                        <li>
                            <div className="row">
                            <div className="col-xl-6">
                                        <div className="submit-field">
                                            <h5>Qualification</h5>
                                            <input type="text" name='qualification' className="with-border" onChange={onHandlechangeeducation}/>
                                        </div>
                                        <div className="submit-field">
                                        <h5>Education Description</h5>
                                        <textarea cols="30" rows="5" name='edudesc' form="usrform" className="with-border" onChange={onHandlechangeeducation}></textarea>
                                        </div>
                                    </div>
                                
                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <h5>Collage Name<i className="help-icon" data-tippy-placement="right" title="Add up to 10 skills"></i></h5>
                                        
                                        <div className="keywords-container">
                                            <div className="keyword-input-container">
                                            <input type="text" name='collage' className="with-border" onChange={onHandlechangeeducation}/>
                                            </div>                                          
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="submit-field">
                                        <h5>Attachments</h5>
                                        
                                        <div className="attachments-container margin-top-0 margin-bottom-0">
                                            
                                            <div className="submit-field">
                                            <h5>From year</h5>
                                            <input type="number"  name='edufrom' className="with-border" onChange={onHandlechangeeducation}/>
                                            <div className="submit-field">
                                            <h5>To year</h5>
                                            <input type="number" name='edutill' className="with-border" onChange={onHandlechangeeducation}/>
                                        </div>
                                        </div>
                                            
            
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                       
                    </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-12">
                <input  type='submit' className="button ripple-effect big margin-top-30"/>
            </div>

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
    </form>
</div>

</div>

    </>
  )
}

export default RegisterFreelancer