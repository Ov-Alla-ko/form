import React from "react"
import { Form, Button, Container } from "react-bootstrap";
export function FormOfComments() {



  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
      mode: 'no-cors',
      method: 'POST',
      body: data,
    });
  }


  return (
    <><Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required={true} type="text" name="name" placeholder="Enter name. . ." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Comment</Form.Label>
          <Form.Control required={true} type="text" name="text" placeholder="Comment. . ." />
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form></Container>
    </>
  );
}
