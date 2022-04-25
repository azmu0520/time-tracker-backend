import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ setRegister, register, setLogin, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
