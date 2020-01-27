import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      source:'',
      year:'',
      rating:''
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="titre" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year"onChange={this.handleChange} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={() =>{
                this.props.add(this.state)
                this.setState({show:false})
            }}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;