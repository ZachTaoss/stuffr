// // const str = "test1 test_01.js coding.css script.js testing.coding";
// const str = 'xf.'


// const re = /[akx][d-m]\./g

// //1. starts with a,k or x
// //2. next letter is d through m
// //3. ends in a 

// console.log(str.match(re))

//starts with a Mr. or Ms.
//Then has a space 
//then a 4 letter name first letter us caps 

const str = 'Mr. Doug'

const re = /M[rs]\. [A-Z][a-z]{3}$/

console.log(str.match(re))
