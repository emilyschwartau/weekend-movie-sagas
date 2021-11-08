const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//I did my genre selecting on the front end, but 
//should figure out how to do it using an SQL query

//selects all rows from genres table
router.get('/', (req, res) => {

  const query = `SELECT * FROM "genres"`;

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
