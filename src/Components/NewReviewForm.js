import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const NewReviewForm = (props) => {
  const [review, setReview] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (review) {
      props.addNewReview(review);
      setReview("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div>
      <h5>Add a review</h5>
      {/* <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="type your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form> */}

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Type your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
