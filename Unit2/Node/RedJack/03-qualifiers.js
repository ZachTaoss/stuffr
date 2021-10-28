//phone numbers 
const str1 = `(123)123 1234`

const re1 = /^\(?[0-9]{3}[\(\-]?[0-9]{3}[ -]?[0-9]{4}$/

console.log(re1.test(str1))

//checking if a number is between 0 and 100 

const str2 = `10`

const re2 = /^[1-9][0-9]?$|^100$/

console.log(re2.test(str2))




//CHecks  a password to make sure it 
//1. starts with 3 letters captial or lowercase 
//2. any special character 
//3. ends in 4 even numbers 

const re3 = /^[A-Za-z]{3}[^a-zA-Z0-9/n/t ]?[02368]+$/