import React from 'react';
import { useEffect, useState } from "react";
import { vendiaClient } from './vendiaClient';
import { FormPage } from './FormPage';
import { HomePage } from './HomePage';

export const { client } = vendiaClient();

export const DataContext = React.createContext()

export const DataProvider = ({ children }) => {

  const [device, setDevice] = useState('');
  const [testID, setTestID] = useState(0);
  const [testList, setTestList] = useState();
  const [orgAssignment, setOrgAssignment] = useState('');
  const [testName, setTestName] = useState('');
  const [testMethod, setTestMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [completed, setCompleted] = useState(false);
  const [updatedBy, setUpdatedBy] = useState('');

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
        updatedBy: [updatedBy, setUpdatedBy]
        }}>
        {children}
      </DataContext.Provider>
      {/* <DataContext.Provider value = {testList}>
            {children}
        </DataContext.Provider> */}
    </div>
  )
};

