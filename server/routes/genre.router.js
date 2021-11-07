const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// import { useDispatch, useSelector } from 'react-redux';
// const movies = useSelector(store => store.movies);

router.get('/', (req, res) => {
  // Add query to get all genres
  //this probably needs to change to code below
  const query = `SELECT * FROM "genres"`;
  // const query = `SELECT "genres"."name" FROM "movies_genres"
  //  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  //  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  //  WHERE "movies"."title" = ${movie.title}`;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all genres', err);
    res.sendStatus(500)
  })
});

module.exports = router;

// SELECT "genres"."name" FROM "movies_genres"
// JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
// JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
// WHERE "movies"."title" = 'Toy Story';




//example

//this is equivalent to /api/genre , genreRouter in server.js
// app.use('/student', student);

//equivalent to get in this page?? 
// student.get('/profile/:start/:end', function (req, res) {
//     console.log("Starting Page: ", req.params['start']);
//     console.log("Ending Page: ", req.params['end']);
//     res.send();
// })