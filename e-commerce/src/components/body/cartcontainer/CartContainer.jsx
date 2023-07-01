import {CartContext} from "../../../context/cart";
import Table from 'react-bootstrap/Table';
import React, {useContext, useState} from "react";
import ItemCountCart from "../itemcountcart/ItemCountCart";
import {Button, Modal} from "react-bootstrap";
import './CartContainer.css'

const CartContainer = () => {
    const {cart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const [itemTryingToReduceToZero, setItemTryingToReduceToZero] = useState(null);

    const handleIncreaseQuantity = (item) => {
        addItemToCart(item, 1);
    };

    const handleReduceQuantity = (item, prevQuantity) => {
        if (prevQuantity - 1 === 0) {
            setItemTryingToReduceToZero(item);
            return
        }
        addItemToCart(item, -1);
    };

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    const modalHandleRemoveItem = () => {
        handleRemoveItem(itemTryingToReduceToZero.id)
        setItemTryingToReduceToZero(null);

    }

    const modalHandleKeepItem = () => setItemTryingToReduceToZero(null)

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.length === 0 ?
                    <p>Your cart is empty.</p>
                    :
                    <Table striped hover borderless>
                        <tbody>
                        {cart.map(({item, quantity}, index) => {
                                return <tr>
                                    {/* Show index to let the buyer know how many unique items are in the cart*/}
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    {/* //TODO: cuando fetcheo los ítems aprovechar y fetchear la imagen así no tengo que fetchearla en todos lados */}
                                    <td>{item.pictureUrl}</td>
                                    <td>{item.cityName}</td>
                                    <td>
                                        <p>${item.price}</p>
                                        <p>Stock: {item.stock}</p>
                                        <ItemCountCart
                                            count={quantity}
                                            onDecrease={() => handleReduceQuantity(item, quantity)}
                                            onIncrease={() => handleIncreaseQuantity(item)}
                                            stock={item.stock}
                                            onRemove={() => setItemTryingToReduceToZero(item)}
                                        />
                                    </td>
                                </tr>
                            }
                        )
                        }
                        </tbody>
                    </Table>
            }
            <Modal className="justify-content-center align-items-center" centered show={itemTryingToReduceToZero}>
                <Modal.Body>
                    <Modal.Body>
                        <div className="text-center">
                            <p>¿Estás segure de borrar el ítem del carrito?</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="danger" className="cart-modal-remove-item" onClick={() => modalHandleRemoveItem()}>Borrar del carrito</Button>
                            <Button className="cart-modal-remove-item" onClick={() => modalHandleKeepItem()}>Dejarlo en el carrito</Button>
                        </div>
                    </Modal.Body>
                </Modal.Body>
            </Modal>
        </div>

    );


};


export default CartContainer;

