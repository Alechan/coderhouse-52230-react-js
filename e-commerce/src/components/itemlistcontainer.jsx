import { Container, Row, Col } from 'react-bootstrap';
import './itemlistcontainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;