const number = require(`./01-intro`);
const logfunc = require(`./03-moduleFunction`)
const {kids,num2,num3} = require(`./04-globals`)
const {num} = number
const freemem = require ( `./05-os-module`)
//APIKEY is a local variable 
//unseeable from the base file 
const APIKEY = "whatever"

logfunc(number.num + " logging" + num3)

logfunc(number.num + num2)

logfunc(freemem)