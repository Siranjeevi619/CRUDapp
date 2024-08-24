import Movie from "../models/movie.model.js";

export const movieRead = async (req, res) => {
  try {
    const movieRead = await Movie.find();
    res.json({ movieRead });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    hero: req.body.hero,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};

export const movieUpdate = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, hero: req.body.hero },
      { new: true, upsert: true }
    );
    if (!updateMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const movieDelete = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await Movie.deleteOne({ _id: movieId });
    if (deletedMovie.deletedCount === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
