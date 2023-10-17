import React, { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { NewReviewForm } from "./NewReviewForm";
import { ButtonToolbar } from "react-bootstrap";

// Logic for displaying all reviews of an item and opeining/closing modal to display form to edit a review.
function Reviews(props) {
  const [show, setShow] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (showIndex) => {
    console.log(showIndex);
    setSelectedReviewIndex(showIndex);
    setShow(true);
  };

  const [editReview, setEditReview] = useState([]);
  const handleReview = (e) => {
    e.preventDefault();
    console.log("after submit new review is");
    console.log(editReview);
    props.editReview(editReview, selectedReviewIndex);
    setShow(true);
  };

  const handleReviewChange = (e) => {
    e.preventDefault();
    setEditReview(e.target.value);
    console.log("handle review change");
    console.log(e.target.value);
    setShow(true);
  };

  return (
    <div>
      {props.reviews.map((review, index) => (
        <React.Fragment key={index}>
          {review}-{index}
          <ButtonToolbar>
            <Button
              index={index}
              className="reviewButtons"
              variant="success"
              size="sm"
              onClick={() => handleShow(index)}
            >
              Edit-{index}
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
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Review-{selectedReviewIndex}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleReview}>
              <Form.Group controlId="review">
                <Form.Label>Edit review</Form.Label>
                <Form.Control
                  type="text"
                  name="reviews"
                  required
                  placeholder="new review"
                  defaultValue={editReview}
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

    // <div className="review-list">
    //   {props.reviews.map((review, index) => (
    //     <div key={index}>
    //       <label>
    //         {index}:{review}
    //       </label>
    //       <Button
    //         index={index}
    //         className="reviewButtons"
    //         variant="success"
    //         size="sm"
    //         onClick={() => handleShow(review, index)}
    //       >
    //         Edit{index}
    //       </Button>

    //       <Button
    //         className="reviewButtons"
    //         variant="danger"
    //         size="sm"
    //         onClick={(e) => props.deleteReview(review)}
    //       >
    //         Delete
    //       </Button>
    //     </div>
    //   ))}

    //   <Modal
    //     show={show}
    //     onHide={() => setShow(false)}
    //     index={props.reviews.indexOf(editReview)}
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title>
    //         Edit Review - {props.reviews.indexOf(editReview)}
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <form>
    //         <label>Edit Review: {props.reviews.indexOf(editReview)}</label>
    //         <input
    //           type="text"
    //           value={editReview}
    //           onChange={(e) => {
    //             console.log(e.target.value);
    //             setEditReview(e.target.value);
    //           }}
    //         />
    //       </form>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button
    //         //id={id}
    //         variant="primary"
    //         onClick={(e) => {
    //           //console.log(editReview.id);
    //           props.editReview(editReview, props.reviews.indexOf(editReview));
    //           handleClose();

    //           console.log(props.reviews.indexOf(editReview));
    //         }}
    //       >
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
  );
}

export default Reviews;
