import React from "react";
import AuthProvider from "./auth";

export const MainContext = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default MainContext;
