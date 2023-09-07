import React from "react";
import LoginModal from "./LoginModal";
import { Container, Row, Col } from "react-bootstrap";
import RegisterModal from "./UserRegisterModal";

const LandingPage = () => {
  return (
    <Container>
      <h1>Welcome to the Learning Notes App</h1>
      <Row>
        <Col md={6}>
          <LoginModal />
        </Col>

        <Col md={6}>
          <RegisterModal />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
