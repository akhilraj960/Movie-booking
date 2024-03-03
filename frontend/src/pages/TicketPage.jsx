import { Checkbox, Toolbar, Typography } from "@mui/material";
import React from "react";

const TicketPage = () => {
  const seat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Toolbar />
      <Typography
        maxWidth={"800px"}
        margin={"auto"}
        display={"flex"}
        flexWrap={"wrap"}
        gap={"1rem"}
      >
        {seat.map((value, index) => {
          return (
            <Typography display={"flex"}>
              <p>seat no.{value}</p>
              <Checkbox />
            </Typography>
          );
        })}
      </Typography>
    </div>
  );
};

export default TicketPage;
