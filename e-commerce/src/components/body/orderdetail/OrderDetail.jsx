import React from 'react';
import { Container, Table } from 'react-bootstrap';

const OrderComponent = ({ order }) => {
    const { date, buyer, total, state, items } = order;

    return (
        <Container>
            <h1>Order Details</h1>
            <p>Date: {new Date(date.seconds * 1000).toLocaleString()}</p>
            <p>Buyer Name: {buyer.name}</p>
            <p>Buyer Phone: {buyer.phone}</p>
            <p>Buyer Email: {buyer.email}</p>
            <p>Total: {total}</p>
            <p>State: {state}</p>

            <h2>Items:</h2>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderComponent;