import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <Typography
      variant="div"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <h1>Welcome to Amigo Cinemazz</h1>
      <Button>Book your show</Button>
    </Typography>
  );
};

export default Home;
