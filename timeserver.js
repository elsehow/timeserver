var restify = require('restify')

port = 16649

var server = restify.createServer({});

// allow CORS
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
)

// handle get requests
server.get('/', function (req, res, next) { 
  res.send(200, new Date())
})

// run server
server.listen(port)
console.log('listening on port ' + port)
