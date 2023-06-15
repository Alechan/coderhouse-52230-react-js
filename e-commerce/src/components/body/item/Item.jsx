import React from "react";
import './Item.css';
import {Card} from "react-bootstrap";

function Item({item}) {
    return (
        <Card className="item">
            <Card.Body>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.cityName}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Item;