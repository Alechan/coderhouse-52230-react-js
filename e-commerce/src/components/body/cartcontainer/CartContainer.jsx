import {CartContext} from "../../../context/cart";
import Table from 'react-bootstrap/Table';
import React, {useContext, useState} from "react";
import ItemCountCart from "../itemcountcart/ItemCountCart";
import {Button, Modal} from "react-bootstrap";
import './CartContainer.scss'
import {LinkContainer} from "react-router-bootstrap";
import {ROUTES} from "../../../constants";

const CartContainer = () => {
    const {cart, addItemToCart, removeItemFromCart, getTotalPrice} = useContext(CartContext);
    const [itemTryingToReduceToZero, setItemTryingToReduceToZero] = useState(null);

    const handleIncreaseQuantity = (item, prevQuantity) => {
        if (prevQuantity < item.stock) {
            addItemToCart(item, 1);
        }
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
        <div >
            {
                cart.length === 0 ?
                    <div>
                        <h1>Tu carrito está vacío :(</h1>
                        <LinkContainer to={ROUTES.HOME} className="d-block">
                            <Button>Ir a llenar al carrito</Button>
                        </LinkContainer>
                    </div>
                    :
                    <>
                        <h1 className="text-center">¡Tenés estos ítems en tu carrito!</h1>
                        <Table striped hover borderless className="text-center">
                            <tbody>
                            {cart.map(({item, quantity}) => {
                                    return <tr>
                                        <td className="align-middle">
                                            <p className="m-1">
                                                {item.title}
                                            </p>
                                        </td>
                                        {/* //TODO: cuando fetcheo los ítems aprovechar y fetchear la imagen así no tengo que fetchearla en todos lados */}
                                        <td className="align-middle">
                                            <p className="m-1">
                                                {item.pictureUrl}
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            <p className="m-1">
                                                {item.cityName}
                                            </p>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center m-1">
                                                <p className="m-1">${item.price}</p>
                                                <p className="m-1">Stock: {item.stock}</p>
                                                <ItemCountCart
                                                    count={quantity}
                                                    onDecrease={() => handleReduceQuantity(item, quantity)}
                                                    onIncrease={() => handleIncreaseQuantity(item, quantity)}
                                                    stock={item.stock}
                                                    onRemove={() => setItemTryingToReduceToZero(item)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                }
                            )
                            }
                            <tr>
                                <td colSpan="4" className="align-middle align-items-center justify-content-center text-center">
                                    Total: ${getTotalPrice()}

                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </>
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

