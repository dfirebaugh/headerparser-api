var express = require('express')
var app = express()

var port = process.env.PORT || 8800



app.get('/', function (req, res) {
      var ipaddress = req.headers['x-forwarded-for']
      var language = req.headers['accept-language']
      var software = req.headers['user-agent']
      
      var resObj = {
          "ipaddress": ipaddress,
          'language': language,
          'software': software
          }
  //res.send(req.headers['x-forwarded-for'])

  
  res.send(resObj)
  console.log(resObj)
  
})

app.listen(port, function () {
  console.log('listening on port: '+ port)
  
})
