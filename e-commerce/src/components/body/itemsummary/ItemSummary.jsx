import React from "react";
import './ItemSummary.css';
import {Col, Row, Container} from "react-bootstrap";

function ItemSummary({item}) {
    return (
        <Container fluid className="item-detail justify-content-center align-items-center">
            <Row>
                <Col>
                    <h4>{item.title}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={item.pictureUrl} alt={item.title}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemSummary;