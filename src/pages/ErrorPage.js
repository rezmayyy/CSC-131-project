import React from 'react';
import { useContext } from "react";
import { vendiaClient } from '../vendiaClient';
import { DataContext } from '../context/dataContext';
import { Link } from 'react-router-dom';
import { DeviceNameInput } from '../component/deviceNameInput';


export const { client } = vendiaClient();

export const ErrorPage = () => {

    return (
        <div>
            <h1>Algorithm Allies Team 6</h1>
            <h2>Error404 </h2>
        </div>
    )
};
