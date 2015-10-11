#!/usr/bin/env node

var restify = require('restify')
  , argv = require('minimist')(process.argv.slice(2))
  , port = parseInt(argv._)
  , server = restify.createServer({})

if (!port) { port = 8888 }

// allow CORS
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Content-Type", "text/plain")
    return next()
  }
)

// handle get requests
server.get('/', function (req, res, next) { 
  res.send(200, new Date().toISOString())
})

// run server
server.listen(port)
console.log('listening on 0.0.0.0:' + port)
