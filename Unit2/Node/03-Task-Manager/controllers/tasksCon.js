/*
post `/` createTask that add a new Task to the list 
get `/` getTask => returns all task 
delte `/:id` deltetTask removes task 
put `/:id` editTask = updates task 
delte `/` clearTaks => removes all tasks 
get `/:id` getTask => returns 1 task
*/

const Task = require("../models/Task");

const getTasks = async (req, res) => {
  //Find is a query
  //quiers return the thing you are looking for

  const tasks = await Task.find({});
  //This is returned
  res.json({ method: req.method, tasks: tasks });
};
const createTask = async (req, res) => {
  //task .create is a method yhajy add yje ye,playe onkects to the db
  //Create is a METHOD NOT A QUERY
  const tasks = await Task.create(req.body);
  //the res is jst what this sdv sees in the response
  res.json({ method: req.method, task: "createTasks", body: req.body });
};
const removeTask = async (req, res) => {
  const { id } = req.params.id;
  try {
    const task = await Task.deleteOne({ _id: id });
    res.json({ method: req.method, task: "removeTask", id: req.params });
    if (!task) {
      return res.json({ msg: `no Task with ${id}` });
    }
  } catch (err) {
    res.json({ meg: err });
  }
};
const clearTasks = (req, res) => {
  const tasks = await Task.deleteMany({});

  res.json({ method: req.method, task });
};
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      res.json({ msg: `no item with id : ${id}` });
    }
  } catch (err) {
    res.json({ msg: `no item with id : ${id}` });
  }
  res.json({ method: req.method, task, id: req.params });
};
const editTask = (req, res) => {
    const {id} = req.params
    try{
        const task = await Task.findByIdAndUpdate(id, req.body,{
            //new true => task ill eqyal to the new task 
            new:true,
    
            runValidators: true
        })
        if(!task){
            return res.json({msg:`no tasks with id ${id}`})
        }
      res.json({
        method: req.method,
        task,
        id: req.params,
        body: req.body,
      });


    }catch(err){

    }

};

module.exports = {
  getTasks,
  createTask,
  removeTask,
  clearTasks,
  getTask,
  editTask,
};
