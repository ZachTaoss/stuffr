
/*
post `/` createTask that add a new Task to the list 
get `/` getTask => returns all task 
delte `/:id` deltetTask removes task 
put `/:id` editTask = updates task 
delte `/` clearTaks => removes all tasks 
get `/:id` getTask => returns 1 task
*/

const Task = require("../models/Task")

const getTasks =async (req,res)=> {
    const tasks = await Task.find({})
    res.json({method:req.method,tasks:tasks})
}
const createTask = async (req,res)=> {
    const tasks = await Task.create(req.body);
    res.json({method:req.method,task:"createTasks",body:req.body})
}
const removeTask = (req,res)=> {
    res.json({method:req.method,task:"removeTask", id:req.params})

}
const clearTasks = (req,res)=> {
    res.json({method:req.method,task:"clearTasks"})

}
const getTask = (req,res)=> {
    res.json({method:req.method,task:"removeTask", id:req.params})

}
const editTask = (req,res)=> {
    res.json({method:req.method,task:"removeTask", id:req.params, body:req.body})

}

module.exports = {
    getTasks,
    createTask,
    removeTask,
    clearTasks,
    getTask,
    editTask
}