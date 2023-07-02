import Table from "react-bootstrap/Table";
import React from "react";
import CartListRow from "../cartlistrow/CartListRow";

const CartList = ({cart, totalPrice, onDecrease, onIncrease, onRemove}) => {
    return (
        <>
            <h1 className="text-center m-3">¡Tenés estos ítems en tu carrito!</h1>
            <Table hover borderless className="text-center">
                <tbody>
                {cart.map(({item, quantity}, index) => {
                        return <CartListRow
                            key={index}
                            item={item}
                            quantity={quantity}
                            onDecrease={onDecrease}
                            onIncrease={onIncrease}
                            onRemove={onRemove}
                        />
                    })
                }
                <tr>
                    <td colSpan="4" className="align-middle align-items-center justify-content-center text-center">
                        Total: ${totalPrice}
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    );
}
export default CartList;