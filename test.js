var timeserver = require('./index.js')
var test = require('tape')
var get = require('simple-get')

var port = 8888
var server = timeserver()
test('get time from timeserver', t => {
  // run server
  t.ok(server)
  server.listen(port)
  var myDate = new Date() //my date
  get.concat('http://localhost:'+port+'/',
             function (err, res, data) {
               t.notOk(err)
               t.ok(res)
               t.ok(data, data)
               var date = new Date(data)
               t.equals(date.getFullYear(),
                        myDate.getFullYear())
               t.equals(date.getMonth(),
                        myDate.getMonth())
               t.equals(date.getDay(),
                        myDate.getDay())
               t.end()
             })
})

test.onFinish(() => server.close())
