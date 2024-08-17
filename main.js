import express from 'express'
import moviesRoute from './routes/movies.route.js';
const app = express();
const PORT = 9000;

app.get('/', function (req, res) {
  res.send('Hello World');
})

// crud functionality
app.use('/movies', moviesRoute)
app.listen(PORT,()=>{
    console.log(`port is running da @ ${PORT}`)
})