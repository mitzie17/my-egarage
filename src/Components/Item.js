import React, { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { NewReviewForm } from "./NewReviewForm";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Item(props) {
  //console.log('item component')
  //console.log(props)
  const { item, updateItem } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newReview, setNewReview] = useState("");

  const editReview = (updatedReview) => {
    console.log(updatedReview);
    let updatedItem = {
      ...item,
      reviews: item.reviews.filter((review) => review !== updatedReview),
    };

    console.log(updatedItem);
    console.log(newReview);
    updatedItem = {
      ...updatedItem,
      reviews: [...updatedItem.reviews, newReview],
    };

    //logic for your fetch
    updateItem(updatedItem);
  };

  const deleteReview = (reviewId) => {
    const updatedItem = {
      ...item,
      reviews: item.reviews.filter((review) => review !== reviewId),
    };
    updateItem(updatedItem);
  };

  const addNewReview = (review) =>
    updateItem({ ...item, reviews: [...item.reviews, review] });

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
