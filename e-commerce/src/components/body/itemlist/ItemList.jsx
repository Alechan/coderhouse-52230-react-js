import ItemSummary from "../itemsummary/ItemSummary";
import {Col, Container, Row} from "react-bootstrap";

const ItemList = ({items}) => {

    return (
        <Container fluid className="item-list-container">
            <Row md={5} className="justify-content-center">
                {items.map((item, index) => (
                    <Col key={index}>
                        <ItemSummary item={item}/>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default ItemList