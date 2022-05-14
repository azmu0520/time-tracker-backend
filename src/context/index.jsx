import React from "react";
import CartProvider from "./Cart";
import ProductProvider from "./Product";

export const MainContext = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default MainContext;
