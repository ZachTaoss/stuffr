//* Drag and Drop Interfaces

import { icons } from "react-icons";

interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandle(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

//* Project Type
//* defines what the project will look like

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public decription: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

//* Project State Mamagement

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, descripton: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      descripton,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
  }

  moveProject(projectID: string, newStatus: ProjectStatus) {
    const project = this.projects.find((pri) => pri.id === projectID);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

//* validation

interface Validation {
  value: string | number;
  maxlength?: number;
  minLength?: number;
  required?: boolean;
  max?: number;
  min?: number;
}

function validation(input: Validation) {
  let isValid = true;
  if (input.required) {
    isValid = isValid && input.value.toString().trim().length !== 0;
  }
  if (input.minLength != null && typeof (input.value === `string`)) {
    isValid = isValid && input.value.length > input.minLength;
  }
  if (input.maxlength != null && typeof (input.value === `string`)) {
    isValid = isValid && input.value.length > input.maxlength;
  }
  if (input.min != null && typeof (input.value === `number`)) {
    isValid = isValid && input.value > input.min;
  }
  if (input.max != null && typeof (input.value === `number`)) {
    isValid = isValid && input.value > input.max;
  }
  return isValid;
}

function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
  const orginalMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get(){
      return orginalMethod.bind(this)
    }
  };

  return newMethod;
}

class ProjectInput {
  templateEl: HTMLInputElement;
  hostEl: HTMLElement;
  formEl: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;
  descInputEl: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      `project-input`
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById(`app`) as HTMLElement;
    const importedTemplate = document.importNode(this.templateEl.content);
    this.formEl = importedTemplate.firstElementChild as HTMLFormElement;
    this.formEl.id = `user-input`;

    this.titleInputEl = this.formEl.querySelector(`#title`) as HTMLInputElement;
    this.titleInputEl = this.formEl.querySelector(
      `#description`
    ) as HTMLInputElement;

    this.attach;
  }
  private init() {
    this.formEl.addEventListener(`submit`, this.submitHandler);
  }
  private attach() {
    this.hostEl.insertAdjacentElement(`afterbegin`, this.formEl);
  }
@Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs();
    if(this.gatherUserInputs())
    const [title,desc,people] = userInputs;
    projectState.addProject(title,desc,people)
  }

  private gatherUserInputs(): [string, string, number] | void {
    const userTitle = this.titleInputEl.value;
    const userDesc = this.descInputEl.value;
    const userPeople = this.peopleInputEl.value;

    const titleIsVaild: Validation = {
      value: userTitle,
      required: true,
    }
    const descIsVaild: Validation = {
      value: userDesc,
      required: true,

    }

    if (!userTitle || !userDesc || !userPeople) {
      console.log(`something is black please fill it in `);
      return;
    }

    return [userTitle, userDesc, +userPeople];
  }

  private clearInputs(){
    this.titleInputEl.value = ""
    this.descInputEl.value = ""

    this.peopleInputEl.value = ""

  }

  class ProjectItem implements Draggable{
    templateEl: HTMLTemplateElement;
    hostEl: HTMLElement;
    element: HTMLElement;
project: Project;
    constructor(project: string, private hostId: string){
      this.templateEl = document.getElementById(`single-project`) as HTMLElement
      this.hostEl = document.getElementById(this.hostId) as HTMLElement
    
      const importedTemplate = document.importNode(this.templateEl.content,true)
      this.element = importedTemplate.querySelector("section") as HTMLElement
      this.element.id = `${this.project.id}`
      this.attach()

      this.init()
      this.render()
    
    }
    @Autobind
    dragEndHandler(e: DragEvent): void {
        console.log("Dragged");
        
    }
    @Autobind
    dragStartHandler(e: DragEvent): void {
        e.dataTransfer!.setData(`text/plain`,this.project.id)
        e.dataTransfer!.effectAllowed = "move"

    }
    get persons(){
      if (this.project.people === 1 ){
        return "1 person"
      } else {
        return `${this.project.people}`
      }
    }
    private render() {
      this.element.querySelector("h2")!.textContent = this.project.title
      this.element.querySelector("h3")!.textContent = this.persons + "assignied"
      this.element.querySelector("p")!.textContent = this.project.decription
    }
    private attach() {
      this.hostEl.insertAdjacentElement("beforeend",this.element)
    }
    private attach() {
      this.hostEl.insertAdjacentElement("beformed", this.element)
    }
  }
  class ProjectList inplements DragTarget {

    templateEl: HTMLTemplateElement;
    hostEl: HTMLElement;
    element: HTMLElement;
    assigniedProjects: Project[]

constructor(private type: `active` | `finshed`){
  this.assigniedProjects = []
  this.templateEl = document.getElementById(`project-list`) as HTMLElement
  this.hostEl = document.getElementById(`app`) as HTMLElement

  const importedTemplate = document.importNode(this.templateEl.content,true)
  this.element = importedTemplate.querySelector("section") as HTMLElement
  this.element.is = `${type}-projects`
  this.attach()

  this.init()
  this.renderContent()

}

private init(){
  this.element.addEventListener("dragover",this.dragOverHandler)
  this.element.addEventListener("dragleave",this.dragLeaveHandler)
  this.element.addEventListener("drop",this.dropHandler)

  projectState.addListener((projects: Project[])=> {
    const relevantProjects = projects.filter((prj => {
      if (this.type === "active"){
        return prj.status === ProjectStatus.Active
      }
      return prj.status === ProjectStatus.Finished
    }))
    this.assigniedProjects = relevantProjects
    this.renderProjects();
  })
}
private renderProjects() {
  const listEl = document.getElementById(
    `${this.type}-projects-list`
  ) as HTMLUlistElement
  listEl.innerHTML =""

}
private renderContent () {
  const listId = `${this.type}-projects-list`
  this.element.querySelector(`ul`)!.id = listId;
  this.element.querySelector(`h2`)!.textContent = this.type.toUpperCase() + "projects"
}

@Autobind
    dragLeaveHandler(e: DragEvent): void{
      const listEl = this.element.querySelector(`ul`)!
      listEl.classList.remove("droppable")
    }
    dragOverHandler(e: DragEvent): void{
      if(e.dataTransfer && e.data.Transfer.types[0] === "text/plain"){
        e.preventDefault();
        const listEl = this.element.querySelector(`ul`)
        listEl.classList.add("drippable")
      }
    }
    @Autobind
    dropHandler(e: DragEvent): void{
      const priId = e.dataTransfer|.getData("text/plain")
      projectState.moveProject(priId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished)
    }
  }

}

const pjiInput = new ProjectInput();
const activeProject = new ProjectList("active")
const finishedProjects  = new ProjectList("finished")

