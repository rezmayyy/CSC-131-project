import React from 'react';
import { useEffect, useState } from "react";
import { vendiaClient } from '../vendiaClient';
import { FormPage } from '../pages/FormPage';
import { HomePage } from '../pages/HomePage';

export const { client } = vendiaClient();

export const DataContext = React.createContext()

export const DataProvider = ({ children }) => {

  // data for both test and device
  const [device, setDevice] = useState('');

  // test data
  const [testID, setTestID] = useState(0);
  const [testList, setTestList] = useState();
  const [orgAssignment, setOrgAssignment] = useState('');
  const [testName, setTestName] = useState('');
  const [testMethod, setTestMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [completed, setCompleted] = useState(false);
  const [updatedBy, setUpdatedBy] = useState('');

  // device data
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [deviceList, setDeviceList] = useState();

  useEffect(() => {
    const listTests = async () => {
      const listTestsResponse = await client.entities.test.list();
      setTestList(listTestsResponse?.items);
    }
    const listDevice = async () => {
      const listDeviceResponse = await client.entities.device.list();
      setDeviceList(listDeviceResponse?.items)
    }
    listTests();
    listDevice();
  }, [])

  // function to add device based on schema
  // need Device, TestID, OrgAssignment, TestName, Notes, Completed, UpdatedBy

  // When button is clicked remove the device
  // function to remove a device
  const deleteDevice = async (event) => {
    const removeDeviceResponse = await client.entities.test.remove(event.target.id)
    refreshList()
  }

  // refreshList (i think there is a better way, idk how)
  // regrab the list from client and setTestList
  const refreshList = async () => {
    const listTestsResponse = await client.entities.test.list();
    setTestList(listTestsResponse?.items);
  }

  return (
    <div>
      <DataContext.Provider value={{ 
        device: [device, setDevice], 
        testID: [testID, setTestID], 
        testList: [testList, setTestList],
        orgAssignment: [orgAssignment, setOrgAssignment],
        testName: [testName, setTestName],
        testMethod: [testMethod, setTestMethod],
        notes: [notes, setNotes],
        completed: [completed, setCompleted],
        updatedBy: [updatedBy, setUpdatedBy],
        status: [status, setStatus],
        progress: [progress, setProgress],
        deviceList: [deviceList, setDeviceList]
        }}>
        {children}
      </DataContext.Provider>
    </div>
  )
};

