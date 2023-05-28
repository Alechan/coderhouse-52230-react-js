import React from "react";
import ItemCount from "../itemcount/ItemCount";
import './Item.css';
import {Col, Row, Container} from "react-bootstrap";

function Item({item}) {
    // Items an object with the following structure:
    // {
    //     id: 1,
    //     title: "Mesa",
    //     price: 1000,
    //     pictureUrl: "https://via.placeholder.com/150",
    //     stock: 5
    // }

    // TODO: Todavía no definimos qué va a hacer onAdd
    const onAdd = (count) => {
        console.log("Agregaste " + count + " '" + item.title + "' al carrito");
    }
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
            <Row>
                <Col>
                    <p>${item.price}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Stock: {item.stock}</p>
                </Col>
                <Col>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Item;