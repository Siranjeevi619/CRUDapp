import { model, Schema } from "mongoose";

const schema = new Schema({
  title: String,
  hero: String,
});

const Movie = model("Movie", schema);
export default Movie;
