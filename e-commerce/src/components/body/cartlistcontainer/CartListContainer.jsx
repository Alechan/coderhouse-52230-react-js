import {CartContext} from "../../../context/cart";
import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {ROUTES} from "../../../constants";
import CartList from "../cartlist/CartList";
import ModalWithPAndButtons from "../modalwithpandbuttons/ModalWithPAndButtons";
import ModalWithBuyForm from "../modalwithbuyform/ModalWithBuyForm";
import {Timestamp} from "firebase/firestore";
import saveOrder from "../../../services/firestore/orders";


function newOrder(buyer, cart, total) {
    return {
        date: Timestamp.fromDate(new Date()),
        buyer: buyer,
        total: total,
        state: "Iniciada",
        items: cart.map((itemAndQuantity) => {
            const item = itemAndQuantity.item
            const quantity = itemAndQuantity.quantity

            const id = item.id
            const title = item.title
            const price = item.price
            return {id, title, quantity, price}
        }),
    };
}

const CartListContainer = () => {
    const {cart, addItemToCart, removeItemFromCart, getTotalPrice, clearCart, getTotalItems} = useContext(CartContext);
    const [itemTryingToReduceToZero, setItemTryingToReduceToZero] = useState(null);
    const [showClearCartModal, setShowClearCartModal] = useState(false);
    const [showBuyFormModal, setShowBuyFormModal] = useState(false);
    const [showOverlaySpinner, setShowOverlaySpinner] = useState(false);
    const [orderId, setOrderId] = useState(null);

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

    const modalHandleClearCart = () => {
        handleClearCart();
        setShowClearCartModal(false);
    }

    const modalHandleRemoveItem = () => {
        handleRemoveItem(itemTryingToReduceToZero.id)
        setItemTryingToReduceToZero(null);

    }

    const modalHandleKeepItem = () => setItemTryingToReduceToZero(null)

    const modalHandleBuyFormSubmit = (formData) => {
        setShowOverlaySpinner(true)
        const order = newOrder(formData, cart, getTotalPrice())
        const orderId = saveOrder(order)
        orderId.then((id) => {
            console.log(id)
        })

        // setShowBuyFormModal(false)
    }
    const modalHandleBuyFormCancel = () => {
        setShowBuyFormModal(false)
    }

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
                                  totalItems={getTotalItems()}
                                  onDecrease={handleReduceQuantity}
                                  onIncrease={handleIncreaseQuantity}
                                  onRemove={setItemTryingToReduceToZero}
                        />
                        <div className="d-flex justify-content-center">
                            <LinkContainer to={ROUTES.HOME} className="modal-home-button">
                                <Button className="button-with-margin">Seguir comprando</Button>
                            </LinkContainer>
                            <Button variant="success" className="button-with-margin"
                                    onClick={() => setShowBuyFormModal(true)}>
                                Finalizar compra
                            </Button>
                            <Button variant="danger" className="button-with-margin"
                                    onClick={() => setShowClearCartModal(true)}>
                                Vaciar carrito
                            </Button>
                        </div>
                    </>
            }
            {/*Modal to remove an item*/}
            <ModalWithPAndButtons
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
            {/*Modal to clear the cart*/}
            <ModalWithPAndButtons
                shouldShowModal={showClearCartModal}
                pMsg={"¿Estás segure que querés vaciar el carrito?"}
                buttons={[
                    {
                        variant: "danger",
                        onClick: () => modalHandleClearCart(),
                        text: "Vaciar carrito"
                    },
                    {
                        variant: "success",
                        onClick: () => setShowClearCartModal(false),
                        text: "Volver al carrito"
                    }
                ]}
            />
            {/*Modal to buy*/}
            <ModalWithBuyForm
                shouldShowModal={showBuyFormModal}
                shouldShowSpinner={showOverlaySpinner}
                onSubmit={modalHandleBuyFormSubmit}
                onCancel={modalHandleBuyFormCancel}
            />
        </div>)
};


export default CartListContainer;

