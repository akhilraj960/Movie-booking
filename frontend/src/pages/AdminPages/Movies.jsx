import React, { useState } from "react";
import {
  Box,
  Button,
  Fade,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieForm from "../../components/Admin/MovieForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,

  p: 4,
};

const Movies = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Toolbar />
      <Typography variant="h3">Movies</Typography>
      <Toolbar>
        <Button variant="contained" onClick={handleOpen}>
          New Movie {/* Corrected label */}
        </Button>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "gray" }}>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}

            <MovieForm />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Movies;
