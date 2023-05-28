import Item from "../item/Item";
import {Col, Container, Row} from "react-bootstrap";

const ItemList = ({items}) => {

    return (
        <div className="item-list">
            <Container fluid className="item-list-container">
                <Row className="justify-content-center">
                    {items.map((item, index) => (
                        // TODO: Poner el index para que no me tire un warning
                        <Col key={index} >
                            <Item item={item}/>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
}

export default ItemList