import React from 'react';
import { useEffect, useState } from "react";
import { auth } from '../configuration/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={user}>
        {children}
      </AuthContext.Provider>
    </div>
  )
};

