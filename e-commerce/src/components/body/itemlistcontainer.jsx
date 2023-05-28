import { Container, Row, Col } from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemDetail from "./ItemDetail";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        <ItemDetail name="Mesa" initial={0}/>
                        <ItemDetail name="Cajón de naranjas" initial={0}/>
                        <ItemDetail name="Cajón de mandarinas" initial={0}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;