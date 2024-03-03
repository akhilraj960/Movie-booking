import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "../assets/imgz.jpg";
import styled from "@emotion/styled";
import axios from "axios";
import { Link } from "react-router-dom";

const Background = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movie/activemovies")
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      });
  }, []);

  const handleBookTicket = (id) => {};

  return (
    <>
      <Background>
        <h1>Welcome to Amigo Cinemazz</h1>
        <Button>Book your show</Button>
      </Background>

      <Typography
        variant="div"
        maxWidth={"1000px"}
        margin={"auto"}
        marginTop={"80px"}
        marginBottom={"100px"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"20px"}
      >
        {movies.map((value, index) => {
          return (
            <Card
              key={index}
              style={{ width: "300px" }}
              sx={{ maxWidth: "260px" }}
            >
              <CardMedia
                sx={{ height: "360px" }}
                image={`http://localhost:5000/uploads/${value._id}.jpg`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleBookTicket(value._id)}
                  fullWidth
                  size="small"
                >
                  <Link to={`/bookticket/${value._id}`}>Book Now</Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Typography>
    </>
  );
};

export default Home;
