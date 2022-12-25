import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserProfileModal = ({data,closeModal,openedModal}) => {

  console.log(data,'data from modalll')
  console.log(openedModal === data?.id,'data from kooooo')
  return (
    <>
    <Modal
        show={openedModal === data?.id}
      >
        <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
        <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
        <ul className="popup-tabs-nav">
          <li><Link to="#tab">Education</Link></li>
          <Button style={{ float: "right",padding: "21px"}} onClick={()=>closeModal()}>Close</Button>
        </ul>
      </Modal.Title>
      </Modal.Header>
        <Modal.Body>

          <div className="popup-tabs-container">
        <div className="welcome-text">
          <h3>{data?.department}</h3>
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
      
    </>
  );
};

export default UserProfileModal;
