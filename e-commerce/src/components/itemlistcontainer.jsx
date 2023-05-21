import { Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = ({greeting}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemListContainer;