import {Container, Row, Col} from 'react-bootstrap';
import './itemlistcontainer.css';
import Item from "./Item";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        <Item name="Mesa" initial={0} stock={5}/>
                        <Item name="Cajón de naranjas" initial={0} stock={2}/>
                        <Item name="Cajón de mandarinas" initial={0} stock={8}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;