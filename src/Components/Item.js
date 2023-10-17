import React, { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { NewReviewForm } from "./NewReviewForm";
import Reviews from "./Reviews";

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
  //const [editFormReview, setFormReview] = useState("");
  const [newReview, setNewReview] = useState("");

  // const handleEditOnChange = (e) => {
  //   const fieldName = e.target.getAttribute("name");
  //   const fieldValue = e.target.value;
  //   const newReviewData = { ...editFormReview };
  //   newReviewData[fieldName] = fieldValue;
  //   setFormReview(newReviewData);
  // };

  const editReview = (newReview, index) => {
    console.log(newReview);
    console.log(index);
    console.log(item.reviews);
    let itemReviews = item.reviews;
    let findReview = itemReviews[index];
    let findIndex = itemReviews.indexOf(findReview);
    console.log(findIndex);
    itemReviews.splice(index, 1, newReview);
    console.log(itemReviews);
    const updatedItem = {
      ...item,
      reviews: itemReviews,
    };
    console.log(updatedItem);
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
          <Reviews
            reviews={item.reviews}
            editReview={editReview}
            deleteReview={deleteReview}
          />
        </Card.Body>
        <Card.Footer>
          <NewReviewForm addNewReview={addNewReview} />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Item;
