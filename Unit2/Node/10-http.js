const http = require('http')
const os = require('os')
const user = os.userInfo();


const data = {
    names:["jimmy","joe"],
    date: `10/31/2019`,
    numbers: [1,2,3,4,5,6,7,8]

}

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log(`${user.username} visited the home page`)
        res.end('welcome to the home page')
    }else if (req.url === '/about'){
        res.end("Here is the stupid history of stupid")
    }else if (req.url === '/data'){
        res.end(JSON.stringify(data));
    }else{
        res.end(
            `
            <h1>Opps</h1>
            <p>We cant find what you're looking for</p>
            `
        )
    }
})

server.listen(5000)