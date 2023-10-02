import React from 'react';
import { useEffect, useState } from "react";
import { vendiaClient } from './vendiaClient';

const {client} = vendiaClient();

export const Demo = () => {

    const [device, setDevice] = useState('')
    const [testID, setTestID] = useState(0)
    const [testList, setTestList] = useState()
    const [orgAssignment, setOrgAssignment] = useState('');
    const [testName, setTestName] = useState('');
    const [testMethod, setTestMethod] = useState('');
    const [notes, setNotes] = useState('');
    //const [completed, setCompleted] = ();
    const [updatedBy, setUpdatedBy] = ('');
    

    useEffect(() => {
        const listTests = async () => {
            const listTestsResponse = await client.entities.test.list();
            //console.log(listTestsResponse);
            setTestList(listTestsResponse?.items);
        }
        listTests();
    }, [])

    // function to add device based on schema
    // need Device, TestID, OrgAssignment, TestName, Notes, Completed, UpdatedBy
    const addDevice = async () => {
        const addDeviceResponse = await client.entities.test.add({
            Device: device,
            TestID: testID,
            OrgAssignment: orgAssignment,
            TestName: testName,
            TestMethod: testMethod,
            Notes: notes,
            //Completed: completed,
            UpdatedBy: updatedBy

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

    const handleOrgAssignmentChange = (event) => {
        setOrgAssignment(event.target.value);
    }

    // when user clicks on submit call addDevice
    const handleSubmit = (event) => {
        event.preventDefault();
        addDevice();
    }

    // refreshList (i think there is a better way, idk how)
    // regrab the list from client and setTestList
    const refreshList = async () => {
        const listTestsResponse = await client.entities.test.list();
        setTestList(listTestsResponse?.items);
    }

    // When button is clicked remove the device
    // function to remove a device
    const deleteDevice = async (event) => {
        const removeDeviceResponse = await client.entities.test.remove(event.target.id)
        refreshList()
    }

    const updateDevice = async (event) => {
        if (device !== "") {
            const updateDeviceResponse = await client.entities.test.update({
                _id: event.target.id,
                Device: device,
                TestID: testID,
                

            })
            console.log(updateDeviceResponse)
            refreshList()
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    name="device"
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
                <div>
                    <input
                    type="text"
                    name="orgAssignment"
                    placeholder="OrgAssignment"
                    value={orgAssignment}
                    onChange={handleOrgAssignmentChange}
                    />
                </div>
                <input type="submit" />
            </form>
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
                    {testList?.map((item, index) => (
                        <div key={index}>
                            {item.Device}
                            <button id={item._id} onClick={deleteDevice}>x</button>
                            <button id={item._id} onClick={updateDevice}>update</button>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
};