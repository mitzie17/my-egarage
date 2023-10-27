import React from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { NewReviewForm } from "./NewReviewForm";
import Reviews from "./Reviews";

function Item(props) {
  // The Item functional component receives an item and the updateItem method as props from the Items component.
  const { item, updateItem } = props;

  // Function creates a new review and is passed down to the NewReviewForm component as props.
  const addNewReview = (review) =>
    updateItem({ ...item, reviews: [...item.reviews, review] });

  // Function updates an existing review by accepting the new review and the index of old review as parameters.
  const editReview = (newReview, index) => {
    // Stores all of an items' reviews in the variable itemReviews
    let itemReviews = item.reviews;
    // The splice method is called on the itemReviews array to remove old review and replace it with the new review.
    // The first argument in the splice method is the index of the value to be removed. The second argument is how many
    // values we want to remove. The last argument is the value to be added.
    // REMINDER: calling itemReviews after applying the splice method does change the original array, therefore the itemsReview
    // array should return an array of reviews with the new review in the same index position as the old review.
    itemReviews.splice(index, 1, newReview);
    // Variable stores an item object with the reviews property being updated by assigning it the updated itemsReviews
    // array containing the edited review
    const updatedItem = {
      ...item,
      reviews: itemReviews,
    };
    // Passes the updatedItem object and calls the updateItem funtion from the App component to make a put request in the api.
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
