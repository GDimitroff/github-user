import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value="hello">{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
