import React from 'react';
import { useEffect, useContext } from "react";
import { vendiaClient } from '../vendiaClient';
import { DataProvider, DataContext } from '../context/dataContext';
import { DeviceNameInput } from '../component/deviceNameInput';


export const { client } = vendiaClient();

export const HomePage = () => {

  const [deviceList, setDeviceList] = useContext(DataContext).deviceList
  const [device, setDevice] = useContext(DataContext).device

  const addDevice = async () => {
    const checkDeviceName = await client.entities.device.list({
        filter: {
            Device: {
                contains: device
            }
        }
    })

    if(checkDeviceName.items.length == 0){
      const addDeviceResponse = await client.entities.device.add({
          Device: device,
          Status: "active",
          Progress: 0
        })
    }
    setDevice("")
    refreshList()
}

const refreshList = async () => {
  const listDeviceResponse = await client.entities.device.list();
  setDeviceList(listDeviceResponse?.items);
}

  return (
    <div>
      <h1>Algorithm Allies Team 6</h1> 
      <h2>Device List:</h2>   
      <div className="container">

        {deviceList?.map((item, index) => (
          <div key={index} className="item-box">
            {item.Device}
          </div>
        )
        )}
        <div className="item-box">
          <DeviceNameInput />
          <button  onClick={addDevice}>+</button>
        </div>
      </div>
    </div>
  )
};
