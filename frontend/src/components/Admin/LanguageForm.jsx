import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import axios from "axios";

const LanguageForm = ({ data }) => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (data) {
      setLanguage(data.language);
    }
  }, [data]);

  const handleSubmit = () => {
    if (data) {
      axios
        .put("http://localhost:5000/api/language/update/" + data._id, {
          language,
        })
        .then(({ data }) => {
          if (data) {
            alert(data.message);
            window.location.reload();
          }
        });
    } else {
      axios
        .post("http://localhost:5000/api/language/newlanguage", {
          language,
        })
        .then(({ data }) => {
          if (data) {
            alert(data.message);
            window.location.reload();
          }
        });
    }
  };

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
        <Typography variant="h5">
          {data ? "Edit" : "Add New"} Language
        </Typography>

        <TextField
          label="Language"
          fullWidth
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
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

export default LanguageForm;
