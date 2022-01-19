//! you can change qny required param to _ to skip iy in compiling 
// function Logger(constructor: Function) {
//   console.log(constructor);
  
// }
//! decorator factory 

function Logger(toLog: string) {
  console.log("Logger Factory");
  return function(constructor: Function){
    console.log(toLog);
    console.log(constructor)
  }
  
}

//! thid create a decotzto that will add the template string to whatever hook we pass through as long as the ID exist 
// function WithTemplate(template:string, hookId: string) {
//   return function(_:Function){
//     const hookEl = document.getElementById(hookId)
//     if(hookEl){
//       hookEl.innerHTML = template
//     }
//   }
// }

function WithTemplate(template:string, hookId: string) {
  console.log("Template FACTORY")
  return function(_:Function){
    const hookEl = document.getElementById(hookId)
    const p = new Person()
    if(hookEl){
      hookEl.innerHTML = template
      hookEl.querySelector("h1")!.textContent = p.name
    }
  }
}

@Logger("CREATING PERSON DECORATOR")
@WithTemplate("<h1>Person Class</h1>","app")
class Person {
  name = "Max"
  constructor() {
    console.log("Created Person Object");
    
  }
}

const max = new Person();

console.log(max);
