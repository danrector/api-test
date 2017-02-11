var express = require('express')
var app = express()
var faker = require('faker');

app.get('/album/123/assets', function (req, res) {
  
  /*
    DO FAKER STUFF HERE, REBUILD SOMETHING THAT LOOKS LIKE THE CHUTE API
  */
  
  faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
  
  res.send(FAKE_DATA)
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})