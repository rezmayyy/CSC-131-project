import React from 'react';
import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { vendiaClient } from '../vendiaClient';
import { DataProvider, DataContext } from '../context/dataContext';
import { Link } from 'react-router-dom';
import { FormPage } from './FormPage';
import { TestlistPage }  from './TestlistPage';

export const { client } = vendiaClient();

export const HomePage = () => {

  const deviceList = useContext(DataContext).deviceList[0]
  return (
    <div>
      <h1>Algorithm Allies Team 6</h1> 
      <h2>Device List:</h2>   
      <div className="container">

        {deviceList?.map((item, index) => (
          <div key={index} className="item-box">
            {item.Device}
            <br />
            {item.Progress}%
            <br />
            <button><Link to={`/testlist/${item.Device}`}>view test</Link></button>
          </div>
        )
        )}
      </div>
    </div>
  )
};
