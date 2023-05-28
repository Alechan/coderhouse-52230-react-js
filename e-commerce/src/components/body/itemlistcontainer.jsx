import { Container, Row, Col } from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        <ItemCount item="Table" />
                        <ItemCount item="Chair" />
                        <ItemCount item="T-Shirt" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;