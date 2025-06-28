import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "@mui/material";
import InputsFields from "./InputsFields";

const FormContainer = ({ onUserAdded, editUser, editIndex, clearEdit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    salary: "",
    qualification: "",
    manager: "",
    designation: "",
  });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handlerChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = JSON.parse(localStorage.getItem("data")) || [];

    let updatedData;
    if (editIndex !== null && editIndex !== undefined) {
      prevData[editIndex] = formData;
      updatedData = prevData;
    } else {
      updatedData = [...prevData, formData];
    }

    localStorage.setItem("data", JSON.stringify(updatedData));
    onUserAdded();
    setFormData({
      name: "",
      email: "",
      mobile: "",
      salary: "",
      qualification: "",
      manager: "",
      designation: "",
    });
    clearEdit();
  };

  return (
    <Container>
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{
          boxShadow: "0px 0px 5px black",
          mt: 5,
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InputsFields handlerChange={handlerChange} formData={formData} />
        <Button size="large" variant="contained" type="submit" sx={{ mt: 2 }}>
          {editUser ? "Update Employee" : "Add Employee"}
        </Button>
      </Card>
    </Container>
  );
};

export default FormContainer;
