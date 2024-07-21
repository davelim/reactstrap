import Reac from 'react';
import {Container, Row, Col} from 'reactstrap';
import "./Grid.css";

export default function Grid() {
    return (
        <Container fluid className="border" id="container">
          <Row className="border">
            <Col className="border" sm="4">
              <p>Profile photo</p>
            </Col>
            <Col className="border" sm="8">
              <Row className="border">
                <p>Name</p>
              </Row>
              <Row className="border">
                <p>Email</p>
              </Row>
            </Col>
          </Row>
          <Row className="border">
            <Col>
                <p>Shops</p>
            </Col>
            <Col>
                <p>Favorites</p>
            </Col>
            <Col>
                <p>Reviews</p>
            </Col>
            <Col>
                <p>Users</p>
            </Col>
          </Row>
        </Container>
    );
}