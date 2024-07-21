// https://reactstrap.github.io/?path=/docs/components-layout--layout
import {Container, Row, Col} from 'reactstrap';
import Tabs from './Tabs';
import "./Grid.css";

export default function Grid() {
    return (
        <Container className="border" id="container">
          <Row className="border" id="user">
            <Col className="border" xs="4">
              <p>Photo, img element</p>
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
            <Tabs/>
        </Row>
        </Container>
    );
}