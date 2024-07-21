import Reac from 'react';
import {Container, Row, Col} from 'reactstrap';
import "./Grid.css";

export default function Grid() {
    return (
        <Container className="border" id="container">
          <Row className="border" id="user">
            <Col className="border" xs="4">
              <p>Photo</p>
            </Col>
            <Col className="border" xs="8">
              <Row className="border">
                <p>Name</p>
              </Row>
              <Row className="border">
                <p>Email</p>
              </Row>
            </Col>
          </Row>
          <Row className="border" id="data">
            <Col className="border">
                <p>Shops</p>
            </Col>
            <Col className="border">
                <p>Favorites</p>
            </Col>
            <Col className="border">
                <p>Reviews</p>
            </Col>
            <Col className="border">
                <p>Users</p>
            </Col>
          </Row>
        </Container>
    );
}