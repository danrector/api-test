var express = require('express')
var app = express()
var faker = require('faker');

function generateCustomers () {
	  var assets = []

	  for (var id = 0; id < 10; id++) {
	    var firstName = faker.name.firstName()
	    var lastName = faker.name.firstName()
	    var image = faker.image.image()
	    assets.push({
	      "id": id,
	      "first_name": firstName,
	      "last_name": lastName,
	      "image": image
	    })
	  }

	  return { "assets": assets }
	}

app.get('/album/123/assets', function (req, res) {
  
  /*
    DO FAKER STUFF HERE, REBUILD SOMETHING THAT LOOKS LIKE THE CHUTE API
  */
  

	var FAKE_DATA = [];

	FAKE_DATA = generateCustomers ()
	
  
  res.send(FAKE_DATA)
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})