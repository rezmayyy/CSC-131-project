import React from 'react';
import { useEffect, useContext } from "react";
import { vendiaClient } from './vendiaClient';
import { DataProvider, DataContext } from './dataContext';

export const { client } = vendiaClient();

export const HomePage = () => {

  // const [device, setDevice] = useState('')
  // const [testID, setTestID] = useState(0)
  // const [testList, setTestList] = useState()

  // const {device, testID, testList} = useContext(DataContext);
  // const [stateDevice, setStateDevice] = device;
  // const [stateTestID, setStateTestID] = testID;
  // const [stateTestList, setStateTestList] = testList;
  const testList = useContext(DataContext).testList[0]

  const testingStuff = () => {
    console.log(testList)
  }

  return (
    <div>
      Algorithm Allies Team 6
      <button onClick={testingStuff}>test</button>
      <div>
        {testList?.map((item, index) => (
          <div key={index}>
            {item.Device}
          </div>
        )
        )}
      </div>
    </div>
  )
};

