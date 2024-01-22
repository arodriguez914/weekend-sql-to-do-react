const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('GET Request made for todo list');
    
    const dbQuery = 'SELECT * FROM todos;';
    
    pool.query(dbQuery)
    .then ((result) => {res.send(result.rows); })      
    .catch((err) => {
      console.error("ERROR", err);
      res.status(500).send("ERROR FETCHING RESULTS");
  });   

});
// POST
router.post('/', (req, res) => {
  
    const { task, tools } = req.body;
    const dbQuery = `INSERT INTO todos (task, tools) VALUES ($1, $2);`;
    
    pool
        .query(dbQuery, [task, tools])
        .then((result) => {
            res.status(201).send("Task added to the To-Do List");
        })
        .catch((err) => {
            console.error("ERROR", err);
            res.status(400).send("Failed to add task");
        });    
});

// PUT

// DELETE
router.delete('/:id', (req, res) => {
    console.log('Delete Request', req.params);
    let id = Number(req.params.id)

    toDoList = toDoList.filter((task) => {
    return task.id!== id;
    })

    res.sendStatus(201);
})

module.exports = router;
