var express = require('express')
var app = express()

app.get('/album/123/assets', function (req, res) {
  
  /*
    DO FAKER STUFF HERE, REBUILD SOMETHING THAT LOOKS LIKE THE CHUTE API
  */
  
  
  res.send(FAKE_DATA)
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})