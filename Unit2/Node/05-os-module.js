const os = require("os");
const {type, release,totalmem,freemem} = os;


const user = os.userInfo();

console.log(`the system up time is ${os.uptime()} seconds`);

const current05 = {
    name: type(),
    realse: release(),
    totalMem: totalmem(),
    freemem: freemem()
}

console.log(current05)


module.exports.freemem = os.freemem()