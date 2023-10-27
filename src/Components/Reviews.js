import React, { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { ButtonToolbar } from "react-bootstrap";

function Reviews(props) {
  // Logic for opening the modal and displaying the edit form.
  const [show, setShow] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

  // handleShow accepts a review index and a review as parameters and uses them to call the functions setSelectedReviewIndex() and
  // setSelectedReview() to change the value of their corresponding variables, selectedReviewIndex and selectedReview. Also changes
  // the value of show to true.
  const handleShow = (index, review) => {
    setSelectedReviewIndex(index);
    setSelectedReview(review);
    setShow(true);
  };
  // Function closes the modal.
  const handleClose = () => setShow(false);

  // Logic for handling the editing of a review.
  // Function captures the user's input and passes it to the setEditReview() which changes the value of the editReview variable.
  const handleReviewChange = (e) => {
    e.preventDefault();
    setEditReview(e.target.value);
  };
  // The variable editReview and function setEditReview() are declared to update the value of a review.
  // Function passes the value of editReview, obtained from handleReviewChange(), and selectedReviewIndex, obtained from handleShow(),
  // to the function editReview received through props.
  const [editReview, setEditReview] = useState([]);
  const handleReview = (e) => {
    e.preventDefault();
    props.editReview(editReview, selectedReviewIndex);
  };

  return (
    // Here, map over all reviews of current item received through props (line 11).
    // Both, index and review are passed as arguments to the handleShow function.
    // Only review is passsed as argument to the deleteReview function.
    // Modal display edit form, and the defaultValue is set to selectedReview which is the review passed through handleShow.
    <div>
      {props.reviews.map((review, index) => (
        <React.Fragment key={index}>
          {review}
          <ButtonToolbar>
            <Button
              index={index}
              className="reviewButtons"
              variant="success"
              size="sm"
              onClick={() => handleShow(index, review)}
            >
              Edit review
            </Button>

            <Button
              className="reviewButtons"
              variant="danger"
              size="sm"
              onClick={(e) => props.deleteReview(review)}
            >
              Delete
            </Button>
          </ButtonToolbar>
        </React.Fragment>
      ))}

      <React.Fragment>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleReview}>
              <Form.Group controlId="review">
                <Form.Label>Edit review:</Form.Label>
                <Form.Control
                  type="text"
                  name="reviews"
                  required
                  defaultValue={selectedReview}
                  onChange={handleReviewChange}
                />
              </Form.Group>
              <Form.Group>
                <Button className="mt-2" variant="primary" type="submit">
                  Update
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              type="submit"
              onClick={(e) => {
                handleClose();
              }}
            >
              Close Modal
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default Reviews;
