const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    language: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
