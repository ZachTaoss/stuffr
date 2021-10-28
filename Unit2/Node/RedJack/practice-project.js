const fs = require(`fs`)

const input = fs.readFileSync("./practice-project.txt","utf8")
 
const re1 = /@([a-z|A-Z]+)/g

let answer1 = ''

let match = re1.exec(input)
// console.log(match)

while(match){
    answer1+=match[1]
    // console.log(match[1]);
    // console.log(match[0]);
    // console.log(match.index);
    match = re1.exec(input)
}

console.log(answer1)


const re2 = /[/d][A-Z|a-z]{3}([1-9])[A-Z|a-z]{3}([1-9])[A-Z|a-z]{3}([°])/
const re3 = /[/d][A-Z|a-z]{3}([1-9])[A-Z|a-z]{3}([’])/
const re4 = /[/d][A-Z|a-z]{3}([.])/


let match2 = re2.exec(input)

let answer2 = ''

while(match2){
    answer2+=match2[1]
    match2 = re2.exec(input)
}

console.log(answer2)