import { createContext, useReducer, useEffect } from "react";
import cartReducer from '../reducer/cartReducer';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [productsInCart, dispatch] = useReducer(cartReducer, [], () => {
        const data = localStorage.getItem('cartProducts');
        return data ? JSON.parse(data) : [];
    });

    const saveProduct = (product) => dispatch({ type: 'SAVE_PRODUCT', payload: product })

    const removeProduct = (product) => dispatch({type: 'REMOVE_PRODUCT', payload: product})

    const clearProducts = (product) => dispatch({type: 'CLEAR', payload: {}})

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(productsInCart));
    }, [productsInCart]);

    return (
        <CartContext.Provider value={{ productsInCart, saveProduct, removeProduct, clearProducts }}>
          {children}
        </CartContext.Provider>
    );
}