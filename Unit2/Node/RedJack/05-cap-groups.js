const str = `test test_01.js coding.css script.js testing.coding `


const re = /(\w+)\.(js|css|html)/

let match = re.exec(str);

console.log(match)

//LOOP FOR THE .EXEC()
while(match){
    console.log(`filename: ${match[1]}extension:${match[2]}`);
    match = re.exec(str)
}