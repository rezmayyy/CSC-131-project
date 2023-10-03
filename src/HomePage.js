import React from 'react';
import { useEffect, useContext } from "react";
import { vendiaClient } from './vendiaClient';
import { DataProvider, DataContext } from './dataContext';

export const { client } = vendiaClient();

export const HomePage = () => {

  const testList = useContext(DataContext).testList[0]

  return (
    <div>
      <h1>Algorithm Allies Team 6</h1> 
      <h2>Device List:</h2>   
      <div className="container">

        {testList?.map((item, index) => (
          <div key={index} className="item-box">
            {item.Device}
          </div>
        )
        )}
      </div>
    </div>
  )
};
