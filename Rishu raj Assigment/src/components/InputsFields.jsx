import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const InputsFields = ({ handlerChange, formData }) => {
  const inputFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "mobile",
      label: "Mobile Number",
      type: "number",
      placeholder: "Enter your mobile number",
    },
    {
      id: "salary",
      label: "Salary",
      type: "number",
      placeholder: "Enter your salary",
    },
    {
      id: "qualification",
      label: "Qualification",
      type: "text",
      placeholder: "Enter your qualification",
    },
    {
      id: "manager",
      label: "Manager",
      type: "text",
      placeholder: "Enter manager name",
    },

  ];

  return (
    <Grid container rowSpacing={2} columnSpacing={3} sx={{ p: 3 }}>
      {inputFields.map((item, index) => (
        <Grid size={{xs:12,sm:12,md:6}} key={index}>
            
            <TextField
              fullWidth
              id={item.id}
              value={formData[item.id] || ""}
              label={item.label}
              placeholder={item.placeholder}
              variant="outlined"
              type={item.type}
              onChange={handlerChange}
            />
        </Grid>
      ))}
    </Grid>
  );
};

export default InputsFields;
