import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const MovieForm = () => {
  return (
    <Box component={"div"}>
      <Box
        component={"form"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography variant="h5">Add New Movie</Typography>

        <TextField label="Name" fullWidth type="text" />
        <TextField label="Language" fullWidth type="text" />

        <FormControl fullWidth>
          <InputLabel id="">Language</InputLabel>
          <Select labelId="" id="" label="Language">
            <MenuItem value={10}>Malayalam</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>Tamil</MenuItem>
            <MenuItem value={30}>Hindi</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth type="file" />

        <Button variant="contained" fullWidth color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default MovieForm;
