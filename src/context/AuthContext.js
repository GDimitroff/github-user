import React, { useState, useContext, useEffect } from 'react';
import {
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    if (window.innerWidth <= 640) {
      return signInWithRedirect(auth, provider);
    }

    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, logout, user, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
