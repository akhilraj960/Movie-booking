const express = require("express");
const cors = require("cors");
const db = require("./db/connection");
const app = express();

const PORT = 5000;

const AdminRouter = require("./routes/authRoutes");
const LanguageRouter = require("./routes/languageRoutes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", AdminRouter);
app.use("/api/language", LanguageRouter);

app.listen(PORT, () => console.log(`Server Running on port:${PORT}`));
