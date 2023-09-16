import React from 'react';
import { useEffect, useState} from "react";
import { vendiaClient } from './vendiaClient';

const {client} = vendiaClient();

export const Demo = () => {

    const [device, setDevice] = useState()
    const [testID, setTestID] = useState()
    const [testList, setTestList] = useState()
    
    useEffect(() => {
      const listTests = async () => {
        const listTestsResponse = await client.entities.test.list();
        console.log(listTestsResponse);
        setTestList(listTestsResponse?.items);
      }
      listTests();
    }, [])

    const addDevice = async () => {
        const addDeviceResponse = await client.entities.test.add({
            Device: device,
            TestID: testID
        })
        console.log(addDeviceResponse)
    }

    const handleDeviceChange = (event) => {
        setDevice(event.target.value);
    }

    const handletestIDChange = (event) => {
        setDevice(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addDevice();
    }

  return (
    <div>
        CSUS Fall 2023
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    name="Device"
                    value={device}
                    onChange={handleDeviceChange}
                    />
                </div>
                <div>
                    <input
                    type="text"
                    name="testID"
                    value={testID}
                    onChange={handletestIDChange}
                    />
                </div>
                <input type="submit" />
            </form>
            <div>
                {testList?.map((item, index) => (
                    <div key={index}>
                        {item.Device}
                    </div>
                )
                )}
            </div>
        </div>
    </div>
  )
};