const http = require('http')

http
    .createServer()
    .on(`request`,(req,res)=>{
        if(req.url === '/') res.end("welcome")
        else res.end("ah")
    })
    // .on(`load`,()=>{
    //     console.log("sever is listening")
    // })
    .listen(3000,()=>{
        console.log("sever is listening on port 3000")
    })
