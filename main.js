import express from "express";
import MovieRouter from './routes/movies.route'
const app = express();
const PORT = 9000;

app.get('/', function (req, res) {
  res.send('Hello World');
})

// crud functionality
app.use('movies', MovieRouter)
app.listen(PORT,()=>{
    console.log(`port is running da @ ${PORT}`)
})