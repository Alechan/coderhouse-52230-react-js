import ItemSummary from "../itemsummary/ItemSummary";
import {Col, Container, Row} from "react-bootstrap";

const ItemList = ({items}) => {

    return (
        <div className="item-list">
            <Container fluid className="item-list-container">
                <Row className="justify-content-center">
                    {items.map((item, index) => (
                        <Col key={index} >
                            <ItemSummary item={item}/>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
}

export default ItemList