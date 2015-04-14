express = require('express')
app = express()

// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// handle get requests
app.get('/', function (req, res) { res.json(new Date())})

// run server
server = app.listen(16649)
