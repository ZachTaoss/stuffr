// class Department {
//   public array = [2, 2, 4];
// }

// const IT = new Department();

// console.log(IT.array);

// class ProjectMath {
//   static gravity = 9.8;
//   static speed(time: number) {
//     return time ** 2 * ProjectMath.gravity;
//   }
// }

// ProjectMath.speed(4);

// //! gradebook
// //! protected array with current grade
// //! put in an array and find the average
// //! find the passing grades 65
// //! remove the lowest grade from a array
// //! print out all the utems in an array (...)

// class Gradebook {
//   static grades: number[] = [13, 24, 25, 67];

//   static passingGrade: number = 65;

//   static findAverage() {
//     const sum = Gradebook.grades.reduce((curr, next) => {
//       return curr + next;
//     }, 0);
//     return sum / Gradebook.grades.length;
//   }

//   static removeLowsetGrade() {
//     const min = Math.min(...this.grades);
//     Gradebook.grades.splice(Gradebook.grades.indexOf(min), 1);
//   }

//   static findPassing(): number[] {
//     const passingGrades = Gradebook.grades.filter(
//       (each) => grade > Gradebook.passingGrade
//     );
//     return passingGrades;
//   }

//   static printGrades():string{
//       return Gradebook.grades.join(" ")
//   }
// }


// abstract class Department2 {
//     static fiscalYear = 2022
//     protected employess: string[] = []
//     constructor(
//         public name :string ,
//         protected readoonly id :string
//     ){

//     }

//     static createEmployee( name: string ){
//         return { name: name };
//     }
//     abstract describe(this: Department):void;

//     addEmployee(employee: string){
//         this.employess.push(employee)
//     }

//     printEmployeeInfomation(){
//         console.log(this.employess.length);
//         console.log(...this.employess);
        
        
//     }
// }

// class ITDepartment extends Department2 {

//     constructor(id:string, admins: string[]){
//         super("IT",id)
//     }
//     describe(){
//         console.log("IT Department -ID:" + this.id);
        
//     }

// }

// const employee1 = Department2.createEmployee("Max")

// const it = new ITDepartment("d1",["Jimmy", employee1.name])

// it.addEmployee("Tammy")
// it.addEmployee("Tommy")

// it.describe();
// it.printEmployeeInfomation()

// class AccountingDepartment extends Department {
//     constructor(id:string, private reports: string[]){
//         super("Accounting",id)
//     }
//     describe(this: Department): void {
//         console.log("Accounting Department - ID" + this.id);
        
//     }

//     get MostRecent(){
//         if(this.reports.length > 0){
//             return this.reports[this.reports.length -1]

//         }
//         return`no reports submitted`
//     }
//     set mostRecent(value: String){
//         if(!value){
//             throw new Error ("invaild report")
//         }
//         this.addReports(value)
//     }

//     addReports(text:string){
//         this.reports.push(text)
//     }
    
// }

// const Accounting = new AccountingDepartment(`d2`,[`janis`])

// accounting

