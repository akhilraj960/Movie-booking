const Movie = require("../models/Movie");

const router = require("express").Router();

router.post("/newmovie", (req, res) => {
  const newMovie = Movie(req.body);

  newMovie.save().then((data) => {
    if (data) {
      const imagePath = `./uploads/${data._id}.jpg`;

      if (req.files.image) {
        req.files.image.mv(imagePath, (err) => {
          return res.send({
            message: "New Movie Added Successfully",
            success: true,
          });
        });
      } else {
        return res.send({ message: "Image Upload failed" });
      }
    } else {
      return res.send({ message: "Movie Added failed", success: false });
    }
  });
});

router.get("/movies", (req, res) => {
  Movie.find().then((data) => {
    res.send({ data });
  });
});

module.exports = router;
