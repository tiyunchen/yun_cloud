const http = require('http')
const fs = require('fs')
const {date} = require("mockjs/src/mock/random/date");

const server = http.createServer((req, res)=>{
    fs.readFile('./study.js', (err,data)=>{
        res.writeHead(200, {
            'content-type': 'charset=utf8'
        })
        console.log(data.toString())
        res.end(data)
    })

})

server.listen(3000, ()=>{
    console.log('当前服务运行在3000端口')
})
