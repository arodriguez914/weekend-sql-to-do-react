const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

let toDoList = [
    {
    id: 1,
    task: 'rake leaves',
    tools: 'rake'
  }
];

// GET
router.get('/', (req, res) => {
    console.log('GET Request made for todo list');
    // Send back the list of items!
    res.send(toDoList)       
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
router.delete('/:id', (req, res) => {
    console.log('Delete Request', req.params);
    let id = Number(req.params.id)

    toDoList = toDoList.filter((task) => {
    return task.id!== id;
    })

    res.sendStatus(201);
})

module.exports = router;
