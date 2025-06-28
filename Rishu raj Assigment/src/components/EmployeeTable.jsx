import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeeTable = ({ data, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="employee table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Qualification</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No employees found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>{user.salary}</TableCell>
                <TableCell>{user.qualification}</TableCell>
                <TableCell>{user.manager}</TableCell>
                <TableCell>{user.designation}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
