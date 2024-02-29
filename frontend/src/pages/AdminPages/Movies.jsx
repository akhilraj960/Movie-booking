import React, { useEffect, useState } from "react";
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
import axios from "axios";

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
  const [movies, setMovies] = useState([]);
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movie/movies").then((data) => {
      setMovies(data.data.data);
    });
  }, [reload]);

  const Activate = (id) => {
    axios
      .put("http://localhost:5000/api/movie/status/activate/" + id)
      .then((data) => {
        alert(data.data.message);
        setReload((prevReload) => !prevReload);
      });
  };

  const DeActivate = (id) => {
    axios
      .put("http://localhost:5000/api/movie//status/inactivate/" + id)
      .then((data) => {
        console.log(data);
        alert(data.data.message);
        setReload((prevReload) => !prevReload);
      });
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <Toolbar />
      <Typography variant="h3">Movies</Typography>
      <Toolbar>
        <Button
          variant="contained"
          onClick={() => {
            setData(null);
            handleOpen();
          }}
        >
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
            {movies?.map((value, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img
                    src={`http://localhost:5000/uploads/${value._id}.jpg`}
                    alt=""
                    width={"50px"}
                    height={"auto"}
                  />
                </TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.language}</TableCell>
                <TableCell>
                  {value.status === "InActive" ? (
                    <p style={{ color: "red" }}>{value.status}</p>
                  ) : (
                    <p style={{ color: "green" }}>{value.status}</p>
                  )}
                </TableCell>
                <TableCell style={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      setData(value);
                      handleOpen();
                    }}
                  >
                    Edit{" "}
                  </Button>
                  {value.status === "InActive" ? (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => Activate(value._id)}
                    >
                      Activate
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => DeActivate(value._id)}
                    >
                      InActivate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={style}>
            <MovieForm data={data} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Movies;
