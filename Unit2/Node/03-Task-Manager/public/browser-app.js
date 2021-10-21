//define all the dom elements

const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(`.loading-text`);
const formDOM = document.querySelector(`.task-form`);
const taskInputDOM = document.querySelector(`.task-input`);
const formAlertDOM = document.querySelector(".form-alert");

//load tasks from /api/v1/task

const showTasks = async () => {
  loadingDOM.style.vistiblity = "visible";
  try {
    const {
      data: { tasks },
    } = await axios.get(`/api/v1/tasks`);
    if (tasks.length < 1) {
      tasksDOM.innerHTML =
        "<h5 class=`empty-list`> No tasks in your list </h5>";
      loadingDOM.style.vistiblity = "hidden";
      return;
    }

    const allTasks = tasks.map((task) => {
      const { completed, _id: taskID, name } = task;
      return `<div class = "single-task" ${
        completed && `tasks-completed`
      }> <h5><span><i class = "far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links>


            <a href="task.html"?id=${taskID} class="edit-link">
            <i class = "fas fa-edit" />
            </a>


            <button type="button" class= "delete-btn" data-id="${taskID}">
            <i class="fas fa-trash"></i>
            </button>
            </div>
            </div>`;
    }).join("");
    tasksDOM.innerHTML= allTasks
  } catch (err) {
    tasksDOM.innerHTML = `<h5 class="empty-list"> They was an error, please try again... </h5>`;
  }
  loadingDOM.style.vistiblity = "hidden";
};

showTasks();

// delete task /api/v1/tasks/:id

tasksDOM.addEventListener("click", async (e) => {
    const target = e.target;
    if (target.parentElement.classList.contains("delete-btn")){
        loadingDOM.style.vistiblity = "visble"
        const id = target.parentElement.dataset.id;
        try{
            await axios.delete(`/api/v1/tasks/${id}`)
        }catch ( err ){
            console.error(err)
        }
    }
    loadingDOM.style.vistiblity = "hidden"
})


formDOM.addEventListener("submit",async (e) => {
    e.preventDefault();
    const name = taskInputDOM.value;
    try{
        await axios.post("api/v1/tasks",{name})
        showTasks();
        taskInputDOM.value = ""
        formAlertDOM.style.display="block"
        formAlertDOM.textContent= "Success Task added"
        formAlertDOM.classList.add("text-success")
    } catch(err){
        formAlertDOM.style.display = "block"
        formAlertDOM.innerHTML = 'error, please try again';
    }
    setTimeout(()=>{
        formAlertDOM.style.display = "none"
        formAlertDOM.classList.remove("text-sucess")
    },3000)
})