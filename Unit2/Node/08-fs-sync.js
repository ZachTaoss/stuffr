const {readFileSync, writeFileSync, read, write } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


console.log(second)
console.log('finshed')
console.log(first)

writeFileSync(
    './content/sync-result.txt',
    `Here is the result: \n${first}, \n${second}`,
    {flag:"a"}
)
console.log(second)
