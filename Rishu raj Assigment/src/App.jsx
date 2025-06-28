import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import FormContainer from "./components/FormContainer";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  const [allUser, setAllUser] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("data")) || [];
    setAllUser(getData);
  }, []);

  const handleUserAdded = () => {
    const updatedData = JSON.parse(localStorage.getItem("data")) || [];
    setAllUser(updatedData);
  };

  const handleDelete = (index) => {
    const updated = [...allUser];
    updated.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(updated));
    setAllUser(updated);
  };

  const handleEdit = (index) => {
    setEditUser(allUser[index]);
    setEditIndex(index);
    setShowTable(false); // go back to form
  };

  const clearEdit = () => {
    setEditUser(null);
    setEditIndex(null);
  };

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          p: 3,
          bgcolor: "#ccc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Employee Registration</Typography>
        <Button
          size="large"
          sx={{ bgcolor: "#000", color: "white" }}
          onClick={() => setShowTable((prev) => !prev)}
        >
          {showTable ? "Back to Form" : "All Users"}
        </Button>
      </Box>

      {showTable ? (
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" gutterBottom>
            All Employees:
          </Typography>
          <EmployeeTable
            data={allUser}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Container>
      ) : (
        <Container>
          <FormContainer
            onUserAdded={handleUserAdded}
            editUser={editUser}
            editIndex={editIndex}
            clearEdit={clearEdit}
          />
        </Container>
      )}
    </Stack>
  );
};

export default App;
