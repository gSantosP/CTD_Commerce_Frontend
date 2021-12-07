import { createContext, useReducer, useEffect } from "react";
import cartReducer from '../reducer/cartReducer';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [products, dispatch] = useReducer(cartReducer, [], () => {
        const data = localStorage.getItem('cartProducts');
        return data ? JSON.parse(data) : [];
    });

    const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', payload: product })

    const removeProduct = (product) => dispatch({type: 'REMOVE_PRODUCT', payload: product})

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(products));
    }, [products]);

    return (
        <CartContext.Provider value={{ products, addProduct, removeProduct }}>
          {children}
        </CartContext.Provider>
    );
}