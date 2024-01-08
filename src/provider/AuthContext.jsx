import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('')

  const login = (email) => {
    setAuthenticated(true);
    setEmail(email);
  };

  const logout = () => {
    setAuthenticated(false);
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
