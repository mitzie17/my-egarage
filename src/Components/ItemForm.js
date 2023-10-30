import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

export const ItemForm = (props) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: name,
      brand: brand,
      price: price,
      reviews: [review],
    };

    props.createItem(newItem);
    history.push("/items");
  };
  // Form to create a new item is rendered.
  return (
    <div>
      <>
        <h3 className="form-heading">Create new item</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="formLabels">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label className="formLabels">Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label className="formLabels">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="review">
            <Form.Label className="formLabels">Review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your review..."
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
};
