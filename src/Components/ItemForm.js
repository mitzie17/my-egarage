import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ItemForm = (props) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(name);
    //console.log(price);
    const newItem = {
      name: name,
      brand: brand,
      price: price,
      reviews: [review],
    };
    setName("");
    setBrand("");
    setPrice("");
    setReview("");
    props.createItem(newItem);
    // if (item) {
    //     props.addNewItem(item)
    //     setItem('');
    // } else {
    //     console.log('invalid input')
    // }
  };

  return (
    <div>
      <h3 className="form-heading">Create new item</h3>
      {/* <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="item name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="type your review"
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form> */}

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
    </div>
  );
};
