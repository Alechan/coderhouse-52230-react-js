import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import './OrderDetail.scss';

const OrderDetail = ({order}) => {
    const {id, date, buyer, total, state, items} = order;

    return (
        <>
            <h2 className="d-inline"> Orden de compra en PororóShop </h2>
            <h3 className="d-inline"> ¡No pierdas el ID de compra! </h3>
            <Card>
                <Card.Header className="text-center order-card-header">Orden de compra</Card.Header>
                <Card.Body>
                    <p>ID: {id}</p>
                    <p>Fecha: {new Date(date.seconds * 1000).toLocaleString()}</p>
                    <p>Total: ${total}</p>
                    <p>Estado actual: {state}</p>
                </Card.Body>

                <Card.Header className="text-center order-card-header">Compradore</Card.Header>
                <Card.Body>
                    <p>Nombre y Apellido: {buyer.name}</p>
                    <p>Phone: {buyer.phone}</p>
                    <p>Email: {buyer.email}</p>
                </Card.Body>

                <Card.Header className="text-center order-card-header">Items</Card.Header>
                <ListGroup variant="flush">
                    {items.map(item => (
                        <ListGroup.Item key={item.id}>
                            <p>Nombre: {item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio por unidad: ${item.price}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </>
    );
};

export default OrderDetail;

