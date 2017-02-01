#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
, port = parseInt(argv._)
, timeserver = require('./index.js')

if (!port) { port = 8888 }
var server = timeserver()
server.listen(port)
console.log('timeserver listening on localhost:'+port)
