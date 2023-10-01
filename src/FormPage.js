import React, { useContext } from "react";
import { client } from "./HomePage";
import { DataContext } from "./dataContext";

export const FormPage = () => {

    const {device, testID, testList} = useContext(DataContext);
    const [stateDevice, setStateDevice] = device;
    const [stateTestID, setStateTestID] = testID;
    const [stateTestList, setStateTestList] = testList;

    // when user clicks on submit call addDevice
    const handleSubmit = (event) => {
        event.preventDefault();
        addDevice();
    }

    const addDevice = async () => {
        const addDeviceResponse = await client.entities.test.add({
            Device: stateDevice,
            TestID: stateTestID
        })
        refreshList()
        //console.log(addDeviceResponse)
    }

    const handleDeviceChange = (event) => {
        setStateDevice(event.target.value);
    }

    const handletestIDChange = (event) => {
        setStateTestID(parseInt(event.target.value));
    }

    // refreshList (i think there is a better way, idk how)
    // regrab the list from client and setTestList
    const refreshList = async () => {
        const listTestsResponse = await client.entities.test.list();
        setStateTestList(listTestsResponse?.items);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="Device"
                    placeholder="Device Name..."
                    value={stateDevice}
                    onChange={handleDeviceChange}
                />
            </div>
            <div>
                <input
                    type="number"
                    pattern="[0-9]*"
                    name="testID"
                    value={stateTestID}
                    onChange={handletestIDChange}
                />
            </div>
            <input type="submit" />
        </form>
    )
};
