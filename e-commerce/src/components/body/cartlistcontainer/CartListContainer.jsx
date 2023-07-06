import {CartContext} from "../../../context/cart";
import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import './CartListContainer.scss'
import {LinkContainer} from "react-router-bootstrap";
import {ROUTES} from "../../../constants";
import CartList from "../cartlist/CartList";
import CartListModal from "../cartlistmodal/CartListModal";

const CartListContainer = () => {
    const {cart, addItemToCart, removeItemFromCart, getTotalPrice, clearCart} = useContext(CartContext);
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

    const handleClearCart = () => {
        clearCart();
    }

    const modalHandleRemoveItem = () => {
        handleRemoveItem(itemTryingToReduceToZero.id)
        setItemTryingToReduceToZero(null);

    }

    const modalHandleKeepItem = () => setItemTryingToReduceToZero(null)

    return (
        <div>
            {
                cart.length === 0 ?
                    <div>
                        <h1>Tu carrito está vacío :(</h1>
                        <LinkContainer to={ROUTES.HOME} className="d-block">
                            <Button>Ir a llenar al carrito</Button>
                        </LinkContainer>
                    </div>
                    : <>
                        <CartList cart={cart}
                                  totalPrice={getTotalPrice()}
                                  onDecrease={handleReduceQuantity}
                                  onIncrease={handleIncreaseQuantity}
                                  onRemove={setItemTryingToReduceToZero}
                        />
                        <div className="d-flex justify-content-center">
                            <LinkContainer to={ROUTES.HOME} className="modal-home-button">
                                <Button>Seguir comprando</Button>
                            </LinkContainer>
                            <Button variant="danger" className="cart-modal-remove-item"
                                    onClick={() => handleClearCart()}>
                                Vaciar carrito
                            </Button>
                        </div>
                    </>
            }
            <CartListModal
                shouldShowModal={!!itemTryingToReduceToZero}
                pMsg={"¿Estás segure de borrar el ítem del carrito?"}
                buttons={[
                    {
                        variant: "danger",
                        onClick: () => modalHandleRemoveItem(),
                        text: "Borrar del carrito"
                    },
                    {
                         variant: "success",
                        onClick: () => modalHandleKeepItem(),
                        text: "Dejarlo en el carrito"
                    }
                ]}
            />

        </div>)
};


export default CartListContainer;

