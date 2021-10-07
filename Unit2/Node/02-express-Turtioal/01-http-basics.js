const http = require('http')

http 
    .createServer()
    .on('request',(req,res)=>{
        const url = req.url;

        if (url === '/'){
            res.writeHead(200, {'content-type': `text/html`})
            res.write(`<h1>Home Page </h1>`)
            res.end()
        }

    })
    .listen(5000,() => {
        console.log(`server is listening at port 5000 `)
    })