import { Container,Row,Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const commentInput = () => {
    return ( <div> 
        <Container>
            <Row>
                <Col xs={10}>
                <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
                </Col>
                <Col xs={2} className="d-grid gap-2">
                <Button variant='primary'>Enter</Button>
                </Col>
            </Row>
        </Container>
        

    </div>  );
}
 
export default commentInput;