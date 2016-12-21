var express = require('express')
var app = express()

var port = process.env.PORT || 8800



app.get('/', function (req, res) {
      var ipaddress = req.headers['x-forwarded-for']
      var language = req.headers['accept-language']
      var software = req.headers['user-agent']
      
      var resObj = {
          "ipaddress": ipaddress,
          'language': language.substr(0,language.indexOf(',',1)),
          'software': software.substr(software.indexOf('(',1)+1,software.indexOf(')',0)-software.indexOf('(',0)-1)
          }

  res.send(resObj)
  console.log(resObj)
  
})

app.listen(port, function () {
  console.log('listening on port: '+ port)
  
})
