import {Col, Row} from "react-bootstrap";
import {CartContext} from "../../../context/cart";
import {useContext} from "react";

const CartContainer = () => {
    const {cart} = useContext(CartContext);

    return (
        <Row className="justify-content-center align-items-center">
            <Col className="col-greeter">
                <h1>Carrito</h1>
                <p> Tenés {cart.length} items en el carrito</p>
                {cart.map((itemAndQuantity, index) => <p key={index}> {JSON.stringify(itemAndQuantity.item)} + {itemAndQuantity.quantity} </p>)}
            </Col>
        </Row>);
};

export default CartContainer;
