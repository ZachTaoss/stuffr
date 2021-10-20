/*
    post `/` createTask that add a new Task to the list 
    get `/` getTask => returns all task 
    delte `/:id` deltetTask removes task 
    put `/:id` editTask = updates task 
    delte `/` clearTaks => removes all tasks 
    get `/:id` getTask => returns 1 task
*/

const express = require(`express`);
const router = express.Router();

const {getTask,getTasks,removeTask,editTask,createTask,clearTasks} = require('../controllers/tasksCon')

router.route(`/`).get(getTasks).post(createTask).delete(clearTasks);


router.route(`/:id`).get(getTask).delete(removeTask).put(editTask);


module.exports = router;