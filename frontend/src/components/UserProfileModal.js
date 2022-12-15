import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserProfileModal = ({showModal,activeModal,handleCloseModal,handleSubmit,handleChange}) => {
  return (
    <>
      <Modal
        show={showModal && activeModal === "description"}
      >
        <div
          id="small-dialog"
          className="zoom-anim-dialog mfp-hide dialog-with-tabs"
        ></div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <ul className="popup-tabs-nav">
              <li>
                <a href="#tab">Description </a>
              </li>
              <Button
                style={{ float: "right", padding: "21px" }}
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-tabs-container">
            <div className="welcome-text">
              <h3>Attach File With CV</h3>
            </div>
            <div className="popup-tab-content" id="tab">
              <form onSubmit={handleSubmit} id="add-comment">
                <input
                  type="text"
                  name="description"
                  id=""
                  onChange={handleChange}
                />
                <textarea
                  name="fulldesc"
                  cols="30"
                  rows="5"
                  placeholder="Comment"
                  onChange={handleChange}
                ></textarea>
                <input type="submit" />
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserProfileModal;
