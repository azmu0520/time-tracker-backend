import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./cartReducer";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const ProviderCart = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default ProviderCart;
