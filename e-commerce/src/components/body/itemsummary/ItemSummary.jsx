import React from "react";
import './ItemSummary.css';
import {Card} from "react-bootstrap";

function ItemSummary({item}) {
    return (
        <Card className="item-summary">
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

export default ItemSummary;