const http = require('http')

const server= http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end('Hello what is this about')
    }
    res.end(`
    <h1> oops </h1>
    <a href="/">Go home/a>
    `)
})

server.listen(8080)
