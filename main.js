import express from "express";
import moviesRoute from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
const app = express();
const PORT = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect DB
connectDB();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// crud functionality
app.use("/movies", moviesRoute);

//server to run 
app.listen(PORT, () => {
  console.log(`port is running da @ ${PORT}`);
});