import React from 'react';
import { useEffect, useState} from "react";
import { vendiaClient } from './vendiaClient';

const {client} = vendiaClient();

export const Demo = () => {

    const [device, setDevice] = useState('')
    const [testID, setTestID] = useState(0)
    const [testList, setTestList] = useState()
    
    useEffect(() => {
      const listTests = async () => {
        const listTestsResponse = await client.entities.test.list();
        //console.log(listTestsResponse);
        setTestList(listTestsResponse?.items);
      }
      listTests();
    }, [])

    const addDevice = async () => {
        const addDeviceResponse = await client.entities.test.add({
            Device: device,
            TestID: testID
        })
        refreshList()
        //console.log(addDeviceResponse)
    }

    const handleDeviceChange = (event) => {
        setDevice(event.target.value);
    }

    const handletestIDChange = (event) => {
        setTestID(parseInt(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addDevice();
    }

    const refreshList = async () => {
        const listTestsResponse = await client.entities.test.list();
        setTestList(listTestsResponse?.items);
      }

    const deleteDevice = async (event) => {
        const removeDeviceResponse = await client.entities.test.remove(event.target.id)
        refreshList()
    }
  return (
    <div>
        Algorithm Allies Team 6
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    name="Device"
                    placeholder="Device Name..."
                    value={device}
                    onChange={handleDeviceChange}
                    />
                </div>
                <div>
                    <input
                    type="number"
                    pattern="[0-9]*"
                    name="testID"
                    value={testID}
                    onChange={handletestIDChange}
                    />
                </div>
                <input type="submit" />
            </form>
            <div>
                {/* {testList?.map((item, index) => (
                    <div key={index}>
                        {item.Device}
                        <button id={item._id} key={index} onClick={deleteDevice}>x</button>
                    </div>
                )
                )} */}
                {testList?.map((item) => (
                    <div key={item._id}>
                        {item.Device}
                        <button id={item._id} onClick={deleteDevice}>x</button>
                    </div>
                )
                )}
            </div>
        </div>
    </div>
  )
};