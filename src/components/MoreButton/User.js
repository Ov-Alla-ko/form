import React from "react";
import { Container,  Row, Col } from "react-bootstrap";

const User = ({ name, text }) => {
  return (
    
    <>
     <Container>
     <Row  className="justify-content-md-center"> 
     <Col>Name: {name}
      Comment:{text}
  </Col> 
  </Row>
   </Container>
    </>
  );
};

export default User;