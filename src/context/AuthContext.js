import React from 'react';
import { useEffect, useState } from "react";
import { vendiaClient } from '../vendiaClient';

export const { client } = vendiaClient();

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

  return (
    <div>
      <DataContext.Provider>
        {children}
      </DataContext.Provider>
    </div>
  )
};

