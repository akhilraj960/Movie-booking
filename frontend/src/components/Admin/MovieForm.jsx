import React, { useEffect, useState } from "react";
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
import axios from "axios";

const MovieForm = ({ data }) => {
  const [languages, setLanguages] = useState([]);
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [language, setLang] = useState("");
  const [date, setDate] = useState("");
  const [director, setDirector] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/language/languages")
      .then((response) => {
        setLanguages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
      });

    if (data) {
      setName(data.name);
      setGenre(data.genre);
      setDate(data.date);
      setDirector(data.director);
      setLang(data.language);
    }
  }, [data]);

  const handleSubmit = () => {
    if (data) {
      if (!name || !genre || !date || !director || !language) {
        return alert("All Fields are required");
      }

      axios
        .put(
          "http://localhost:5000/api/movie/updatemovie/" + data._id,
          {
            name,
            genre,
            date,
            director,
            language,
            image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response) {
            alert(response.data.message);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error adding movie:", error);
        });
    } else {
      if (!name || !genre || !date || !director || !language || !image) {
        return alert("All Fields are required");
      }

      axios
        .post(
          "http://localhost:5000/api/movie/newmovie",
          {
            name,
            genre,
            date,
            director,
            language,
            image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response) {
            alert(response.data.message);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error adding movie:", error);
        });
    }
  };

  return (
    <Box component="div">
      <Box
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography variant="h5">{data ? "Edit" : "Add New"} Movie</Typography>

        <TextField
          label="Name"
          fullWidth
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Director"
          fullWidth
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <TextField
          fullWidth
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Genre"
          fullWidth
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            id="language"
            value={language}
            onChange={(e) => setLang(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem key={language._id} value={language.language}>
                {language.language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Movie Poster"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        {!image && data && (
          <img
            src={`http://localhost:5000/uploads/${data._id}.jpg`}
            alt="Movie Poster"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        <TextField
          fullWidth
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default MovieForm;
