import React from "react";
import ProviderCart from "./Cart/cart";

export const MainContext = ({ children }) => {
  return <ProviderCart>{children}</ProviderCart>;
};

export default MainContext;
