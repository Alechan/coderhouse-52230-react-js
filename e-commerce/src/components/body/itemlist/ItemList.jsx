import Item from "../item/Item";
import {Col, Container, Row} from "react-bootstrap";

const ItemList = ({items}) => {

    return (
        <Container fluid >
            <Row md={5} className="justify-content-center">
                {items.map((item, index) => (
                    <Col key={index}>
                        <Item item={item}/>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default ItemList