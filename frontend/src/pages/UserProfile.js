import React from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from 'axios';
import  { connect } from 'react-redux'
import UserProfileModal from "../components/UserProfileModal";
import Jobs from "../components/Jobs";



class UserProfileComponent extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      openedModal: null
    };
  }

  openModal = id => {
    this.setState({ openedModal: id });
  };
  closeModal = () => {
    this.setState({ openedModal: null });
  };



  handleSubmit = event => {
    event.preventDefault();
    
    axios.post(`https://jsonplaceholder.typicode.com/users`, { 
      'description': event.target.description.value,
      'fulldesc': event.target.fulldesc.value
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    console.log(this.props)


    const {
      userdetails,
      dispatch
    } = this.props

 
  return (
    <div>
      <Header />
      <div className="margin-top-80"></div>
      <div
        className="single-page-header freelancer-header"
        style={{ marginBottom: "0px" }}
        data-background-image="images/single-freelancer.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-page-header-inner">
                <div className="left-side">
                  <div className="header-image freelancer-avatar">
                    <img src="/images/user-avatar-big-02.jpg" alt="" />
                    
                    <button class="btnn"><i className="icon-feather-plus"></i></button>
                  </div>
                  <div className="header-details">
                    <h3>
                      {userdetails.username} <span>iOS Expert + Node Dev</span>
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Your Profile</h3>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="dashboard-box margin-top-0">
                <div className="headline" style={{    display: 'flex',
                  justifyContent: 'space-between'}}>
                  <h3 style={{    alignSelf: 'center',padding: '16px',paddingLeft: '0'}}>
                    <i className="icon-feather-user"></i> User Profile
                  </h3>
                  
                  
                </div>
                
                <div className="content">
                  <ul className="dashboard-box-list">
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <div style={{display : 'flex',
                        justifyContent: 'space-between'}}>
                          <h4>Description</h4>
                          <Link style={{marginRight:'5px'}} onClick={() => this.handleOpenModal("description")} >
                            <i className="icon-feather-edit"></i>
                          </Link>
  {/*//! modal was here */}
                          </div>
                          <div className="item-description">
                            <p>
                              Great clarity in specification and communication.
                              I got payment really fast. Really recommend this
                              employer for his professionalism. I will work for
                              him again with pleasure.
                            </p>
                            
                          </div> 
                                
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                        <div style={{display : 'flex',
                        justifyContent: 'space-between'}}>
                          <h4>Education</h4>
                          
                          

                          {/* <Modal show={this.state.showModal && this.state.activeModal === "education"}>
                          <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
                          <Modal.Header closeButton>
                            <Modal.Title  id="contained-modal-title-vcenter">
                              <ul className="popup-tabs-nav">
                                <li><a href="#tab">Education</a></li>
                                <Button style={{    float: "right",padding: "21px"}} onClick={this.handleCloseModal}>Close</Button>
                              </ul>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body >
                          <div className="popup-tabs-container">
                                <div className="welcome-text">
                                  <h3>Attach File With CV</h3>
                                </div>     
                              <div className="popup-tab-content" id="tab">
                                <form method="post" id="add-comment">

                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-outline-account-circle"></i>
                                      <input type="text" className="input-text" name="commentname" id="namecomment" placeholder="Name" required/>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-baseline-mail-outline"></i>
                                      <input type="text" className="input-text" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
                                    </div>
                                  </div>
                                </div>

                                <textarea  name="comment-content" cols="30" rows="5" placeholder="Comment"></textarea>
                                </form>                            
                                </div>
                            </div>
                          </Modal.Body>
                          </Modal> */}
                          </div>
                          {userdetails.educations === undefined ? <h4> empty</h4> :
                          <div>
                          {userdetails.educations.map((data,id) =>{
                            return(
                              <div key={data.id} className="item-description">
                                
                              <div className="boxed-list-item" style={{display : 'flex',
                        justifyContent: 'space-between'}}>
                              
                                  <div className="item-content">
                                      <span
                                      className="company-not-rated margin-bottom-5"
                                      style={{ backgroundColor: "#f0d6db", color: "#000" }}
                                      >
                                      2018-2019
                                      </span>
                                      <h5 style={{ textTransform: 'uppercase'}}> <strong>{data.department}</strong> </h5>
                                      <p> not </p>
                                  </div>
                                  <Link style={{marginRight:'5px'}} onClick={() => this.openModal(data.id)} >
                                    <i className="icon-feather-edit"></i>
                                  </Link>
                              </div>
                              <p>
                                  Great clarity in specification and communication. I got payment really
                                  fast. Really recommend this employer for his professionalism. I will
                                  work for him again with pleasure.
                              </p>
                              <Modal
                                show={this.closeModal && this.state.openedModal === data.id}
                              >
                                <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
                                <Modal.Header closeButton>
                                <Modal.Title  id="contained-modal-title-vcenter">
                                <ul className="popup-tabs-nav">
                                  <li><a href="#tab">Education</a></li>
                                  <Button style={{ float: "right",padding: "21px"}} onClick={this.closeModal}>Close</Button>
                                </ul>
                              </Modal.Title>
                              </Modal.Header>
                                <Modal.Body>
                  
                                  <div className="popup-tabs-container">
                                <div className="welcome-text">
                                  <h3>{data.department}</h3>
                                </div>     
                              <div className="popup-tab-content" id="tab">
                                <form method="post" id="add-comment">

                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-outline-account-circle"></i>
                                      <input type="text" className="input-text" name="commentname" id="namecomment" placeholder="Name" required/>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-baseline-mail-outline"></i>
                                      <input type="text" className="input-text" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
                                    </div>
                                  </div>
                                </div>

                                <textarea  name="comment-content" cols="30" rows="5" placeholder="Comment"></textarea>
                                </form>                            
                                </div>
                            </div>
                                </Modal.Body>
                    
                              </Modal>
                            </div>
                            
                            )
                          })}
                          </div>
                            }
                                
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                        <div style={{display : 'flex',
                        justifyContent: 'space-between'}}>
                           
                          <h4>Work Experience</h4>
                          <Link style={{marginRight:'5px'}} onClick={() => this.handleOpenModal("work")}>
                            <i className="icon-feather-edit"></i>
                          </Link>

                          <Modal show={this.state.showModal && this.state.activeModal === "work"}>
                          <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
                          <Modal.Header closeButton>
                            <Modal.Title  id="contained-modal-title-vcenter">
                              <ul className="popup-tabs-nav">
                                <li><a href="#tab">Work Experience</a></li>
                                <Button style={{    float: "right",padding: "21px"}} onClick={this.handleCloseModal}>Close</Button>
                              </ul>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body >
                          <div className="popup-tabs-container">
                                <div className="welcome-text">
                                  <h3>Attach File With CV</h3>
                                </div>     
                              <div className="popup-tab-content" id="tab">
                                <form method="post" id="add-comment">

                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-outline-account-circle"></i>
                                      <input type="text" className="input-text" name="commentname" id="namecomment" placeholder="Name" required/>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="input-with-icon-left no-border">
                                      <i className="icon-material-baseline-mail-outline"></i>
                                      <input type="text" className="input-text" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
                                    </div>
                                  </div>
                                </div>

                                <textarea  name="comment-content" cols="30" rows="5" placeholder="Comment"></textarea>
                                </form>                            
                                </div>
                            </div>
                            
                          </Modal.Body>
                          </Modal>
                          </div>
                          {userdetails.experience === undefined ? <h4> empty</h4> :
                          <div>
                          {userdetails.experience.map((data,id) =>{
                            return(
                              <div key={data.id} className="item-description">
                              <div className="boxed-list-item">
                                  <div className="item-content">
                                      <span
                                      className="company-not-rated margin-bottom-5"
                                      style={{ backgroundColor: "#f0d6db", color: "#000" }}
                                      >
                                      2018-2019
                                      </span>
                                      <h4>{data.department}</h4>
                                  </div>
                                  <Link style={{marginRight:'5px'}} onClick={() => this.openModal(data.id)} >
                                    <i className="icon-feather-edit"></i>
                                  </Link>
                              </div>
                              <p>
                                  Great clarity in specification and communication. I got payment really
                                  fast. Really recommend this employer for his professionalism. I will
                                  work for him again with pleasure.
                              </p>
                              <Modal
                                show={this.closeModal && this.state.openedModal === data.id}
                              >
                                <Modal.Header>Modal title</Modal.Header>
                                <Modal.Body>
                                  <b>{data.department}</b>
                                  <br />
                                  Lorem ipsum
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button color="primary" onClick={this.closeModal}>
                                    Do Something
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                              
                            )
                          })}
                          </div>
                            }
                               
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>

            <div className="col-xl-6">
              <div className="dashboard-box margin-top-0">
              <div className="headline" style={{    display: 'flex',
                  justifyContent: 'space-between'}}>
                  <h3 style={{    alignSelf: 'center'}}>
                    <i className="icon-line-awesome-list-ul"></i> Your Posts
                  </h3>
                  <Link to='/post_job' className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10">
                            <i className="icon-feather-edit"></i> Post a Job
                          </Link>
                  
                </div>

                <div className="content">
                  <ul className="dashboard-box-list">

                    <li>
                  {userdetails.clientjob.map((data, id) => {
              return (
                
                  // <Jobs key={id} data={data} />
									<div>
									<div key={data.id} className="job-listing width-adjustment">
										<div className="job-listing-details">											
											<div className="job-listing-description">
												<h3 className="job-listing-title"><a href="#">{data.job_title} </a> <span className="dashboard-status-button yellow">Expiring</span></h3>												
												<div className="job-listing-footer">
													<ul>
														<li><i className="icon-material-outline-access-time"></i> 23 hours left</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
																	
									<ul className="dashboard-task-info">
										{/* <li><strong>3</strong><span>Bids</span></li> */}
										<li><strong>₹15 - ₹30</strong><span>Hourly Rate</span></li>
									</ul>
									
									<div className="buttons-to-right always-visible">
										<Link to={`/bidders/${data.id}`} className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Bidders </Link>
										<a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
										<a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
									</div>
                  </div>
								
                      
                      );
                    })}
                      
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-footer-spacer"></div>
          
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return{

    loading : state.userProfile.loading,
    userdetails : state.userProfile.userprofile,

  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return {

//   }
// }

//* now higher order function will call this function first


export default connect(mapStateToProps)(UserProfileComponent);

//* state and dispatch will be comming as props

//* so now dispatch will come default
