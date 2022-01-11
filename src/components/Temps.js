import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import t1 from "./images/t1.png";
import { Link } from "react-router-dom";
import t2 from "./images/t2.png";
import t3 from "./images/t3.png";

function Temps() {
  return (
    <div>
      <Container style={{ marginTop: "10rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={t2} />
              <Card.Body>
                <Card.Title>Template1</Card.Title>
                <Link to="/temp1">
                  <Button variant="primary">Download</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={t1} />
              <Card.Body>
                <Card.Title>Template 2</Card.Title>
                <Link to="/temp2">
                  <Button variant="primary">Download</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" height="350" src={t3} />
              <Card.Body>
                <Card.Title>Template 3</Card.Title>
                <Link to="/temp3">
                  <Button variant="primary">Download</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Temps;
