const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

toDoList = [];

// GET
router.get('/', (req, res) => {
    console.log('GET Request made for todo list');
    // Send back the list of items!
    res.send(toDoList)
    .then((result) => {
        console.log('RESULT', result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
});
// POST
router.post('/', (req, res) => {
    
    console.log('Post Request', req.body)
    const newTask = req.body;
    
    console.log('Adding task', newTask);
    toDoList.push(newTask); 
    res.sendStatus(201);
      })

// PUT

// DELETE

module.exports = router;
