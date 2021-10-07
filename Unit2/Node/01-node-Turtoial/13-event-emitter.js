const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("request",(name , id) => {
    console.log(`${name} has the id of ${id}`)
})

customEvent.on(`food` , (name, _, __,food)=>{
    console.log(`${name} fav food is ${food}`)
})

customEvent.emit("food","jimmy",12345,true,'Donut')