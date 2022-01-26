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
  }