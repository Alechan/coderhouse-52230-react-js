import {createContext, useState} from "react";

export const cartContextDefaultValue = {
    cart: [],
};
export const CartContext = createContext(
    cartContextDefaultValue
);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItemToCart = (item, quantity) => {
        console.log(item, quantity)
        if (isInCart(item.id)) {
            // Update instead of adding a new item if it's already in the cart
            setCart(prevState => {
                const newState = [...prevState];
                const index = newState.findIndex(cartItem => cartItem.item.id === item.id);
                newState[index].quantity += quantity;
                return newState;
            })
            return
        }
        setCart(prevState => [...prevState, {item, quantity}]
    );


    }
    const removeItem = (itemId) => {

    }
    const clear = () => {

    }
    const isInCart = (itemId) => {

    }
    const getTotalItems = () => {
        return cart.reduce((accum, itemAndQuantity) => {
            accum += itemAndQuantity.quantity
            return accum
        }
        , 0
        )
    }
    return (
        <CartContext.Provider value={{cart, addItemToCart, getTotalItems}}>
            {children}
        </CartContext.Provider>
    );
}