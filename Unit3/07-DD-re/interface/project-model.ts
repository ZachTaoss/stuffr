
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
  