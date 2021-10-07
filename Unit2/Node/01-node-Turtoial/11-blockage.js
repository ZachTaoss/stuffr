// const http = require('http');
// const { deflate } = require('zlib');
// const server = http.createServer((req, res)=>{
//     switch(req.url){
//         case'/':
//         res.end("home page");
//         break;
//         case'about':
//         setTimeout(() => {
//             for(let i=0; i < 1000; i++){
//                 for( let j=0; j < 1000; j++){
//                     (console.log(`${i} + ${j}`))
//                 }
//         },0)

        

//         res.end("about");
//         default:
//             res.end('404')
//     }
// server.listen(5000, () => {
//     console.log('sever is runnning on 5000')
// })