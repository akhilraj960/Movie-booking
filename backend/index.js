const express = require("express");
const cors = require("cors");
const db = require("./db/connection");
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = 5000;

const AdminRouter = require("./routes/authRoutes");
const LanguageRouter = require("./routes/languageRoutes");
const MovieRouter = require('./routes/movieRoutes')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", AdminRouter);
app.use("/api/language", LanguageRouter);
app.use("/api/movie", MovieRouter);

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.listen(PORT, () => console.log(`Server Running on port:${PORT}`));
