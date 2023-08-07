import React, { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NewReviewForm } from "./NewReviewForm";

function Item(props) {
  // The Item functional component receives an item and the updateItem method as props from the Items component.
  const { item, updateItem } = props;
  // These variables and functions allow the modal to open or close based on a user's click
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This meethod creates a new review and is passed down to the NewReviewForm component as props.
  const addNewReview = (review) =>
    updateItem({ ...item, reviews: [...item.reviews, review] });

  // Variables used to "edit" a review. First removes a review and "replaces" it by adding the new review.
  const [newReview, setNewReview] = useState("");

  const editReview = (reviewToUpdate) => {
    let updatedItem = {
      ...item,
      reviews: item.reviews.filter((review) => review !== reviewToUpdate),
    };
    updatedItem = {
      ...updatedItem,
      reviews: [...updatedItem.reviews, newReview],
    };
    // Calls the updateItem in the App component to make a put request in the api.
    updateItem(updatedItem);
  };
  // This method takes in a review id and deletes the review object.
  const deleteReview = (reviewId) => {
    const updatedItem = {
      ...item,
      reviews: item.reviews.filter((review) => review !== reviewId),
    };
    updateItem(updatedItem);
  };
  // Logic for displaying all reviews of an item and opeining/closing modal to display form to edit a review.
  const reviews = () => (
    <ul>
      {item.reviews.map((review, index) => (
        <li key={index}>
          <label>{review}</label>
          <Button
            className="reviewButtons"
            variant="success"
            size="sm"
            onClick={handleShow}
          >
            Edit
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label>Enter New Review</label>
                <input onChange={(e) => setNewReview(e.target.value)} />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose();
                  editReview(review);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            className="reviewButtons"
            variant="danger"
            size="sm"
            onClick={(e) => deleteReview(review)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
  // Here a 404 message is display if item is not found otherwise an item's attributes and the form to add a review is rendered.
  return item == undefined ? (
    <h1>404 Item not found</h1>
  ) : (
    <div>
      <Card>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>Brand: {item.brand}</Card.Text>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Card.Subtitle>Reviews</Card.Subtitle>

          {reviews({ reviews, itemId: item.id, deleteReview })}
        </Card.Body>
        <Card.Footer>
          <NewReviewForm addNewReview={addNewReview} />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Item;
