const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('GET Request made for todo list');
    
    const dbQuery = 'SELECT * FROM "todos";';
    
    pool.query(dbQuery)
    .then ((result) => {res.send(result.rows); })      
    .catch((err) => {
      console.error("ERROR", err);
      res.status(500).send("ERROR FETCHING RESULTS");
  });   

});
// POST
router.post('/', (req, res) => {
  
    const { task } = req.body;
    const dbQuery = `INSERT INTO "todos" ("task") VALUES ($1);`;
    
    pool
        .query(dbQuery, [task])
        .then((result) => {
            res.status(201).send("Task added to the To-Do List");
        })
        .catch((err) => {
            console.error("ERROR", err);
            res.status(400).send("Failed to add task");
        });    
});

// PUT
router.put('/:id', (req, res) => {
  // Obtain the req body and id
  const { task } = req.body;
  let id = req.params.id;
  
  const dbQuery = `
      UPDATE "todos"
      SET "task" = $1 WHERE "id" = 2;`;

  pool
      .query(dbQuery, [task])
      .then((result) => {
          res.status(200).send("Task updated");
      })
      .catch((err) => {
          console.error('ERROR', err);
          res.status(500).send("Error updating");
      });   
});

// DELETE
router.delete('/:id', (req, res) => {
  console.log('Delete Request', req.params);
  const id = req.params.id;

  const dbQuery = 'DELETE FROM "todos" WHERE "id" = $1;';

  pool
      .query(dbQuery, [id])
      .then((result) => {
          res.status(200).send("Task deleted");
      })
      .catch((err) => {
          console.error('ERROR', err);
          res.status(500).send("Error 500");
      });   
});

module.exports = router;
