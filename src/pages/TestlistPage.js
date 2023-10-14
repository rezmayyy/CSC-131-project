import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../context/dataContext';
import { Container } from '@mui/material';

export const TestlistPage = () => {

  const {deviceName} = useParams()
  const [rows, setRows] = useState([])

  useEffect(() => {
    const getTestRows = async () => {
      const checkDeviceName = await client.entities.test.list({
        filter: {
          Device: {
            contains: deviceName
          }
        }
      })
      const someObject = checkDeviceName.items.map(item => {
        const objectContainer = {};
        objectContainer.id = item.TestID
        objectContainer.device = item.Device
        objectContainer.orgassignment = item.OrgAssignment
        objectContainer.testname = item.TestName
        objectContainer.testmethod = item.TestMethod
        objectContainer.notes = item.Notes
        objectContainer.completed = item.Completed
        objectContainer.updatedby = item.UpdatedBy
        return objectContainer
      })
  
      setRows(someObject)
    }
    getTestRows()
  })

  const columns = [
    { field: 'id', 
      headerName: 'TestID', 
      width: 90 },
    {
      field: 'device',
      headerName: 'Device',
      width: 150,
      editable: true,
    },
    {
      field: 'orgassignment',
      headerName: 'OrgAssignment',
      width: 110,
      editable: true,
    },
    {
      field: 'testname',
      headerName: 'TestName',
      width: 150,
      editable: true,
    },
    {
      field: 'testmethod',
      headerName: 'TestMethod',
      width: 150,
      editable: true,
    },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 150,
      editable: true,
    },
    {
      field: 'completed',
      headerName: 'Completed',
      width: 150,
      editable: true,
    },
    {
      field: 'updatedby',
      headerName: 'UpdatedBy',
      width: 150,
      editable: true,
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Container>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        />
        </Container>
    </Box>
  );
}