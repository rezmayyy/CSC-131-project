import { vendiaClient } from '../vendiaClient';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export const TestlistPage = () => {
  const columns = [
    { field: 'id', 
      headerName: '_id', 
      width: 90 },
    {
      field: 'device',
      headerName: 'Device',
      width: 150,
      editable: true,
    },
    {
      field: 'testid',
      headerName: 'TestID',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'orgassignment',
      headerName: 'OrgAssignment',
      type: 'number',
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
      field: 'status',
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
  const rows = [
    { id: 'fg80fdg8fg7', device: 'device1', testid: 9, orgassignment: 'orgz', testname: 'eee', testmethod: 'eee', notes: 'eee', status: 'true', updatedby: 'chris' },
  ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
    </Box>
  );
}