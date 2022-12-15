import React, { Component } from "react";
import { render } from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TestFile extends Component {
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

  render() {

    const {
      value
    } = this.props

    console.log(value.category,'to mapp')

    return (
      <div>
        {value.category.map((item, i) => (
          <div key={item.id}>
            <Link color="danger" onClick={() => this.openModal(item.id)}>
              test Modal
            </Link>
            <Modal
              show={this.closeModal && this.state.openedModal === item.id}
            >
              <Modal.Header>Modal title</Modal.Header>
              <Modal.Body>
                <b>{item.category_name}</b>
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
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

    value : state.listCategory

  }
}

export default connect(mapStateToProps) (TestFile)



