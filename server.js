var express = require('express')
var app = express()
var faker = require('faker');

// function generateCustomers () {
// 	  var people = []

// 	  for (var id = 0; id < 10; id++) {
// 	    var firstName = faker.name.firstName()
// 	    var lastName = faker.name.firstName()
// 	    var image = faker.image.image()
// 	    people.push({
// 	      "id": id,
// 	      "first_name": firstName,
// 	      "last_name": lastName,
// 	      "image": image
// 	    })
// 	  }

// 	  return { "people": people }
// 	}

// module.exports = generateCustomers

app.get('/album/123/assets', function (req, res) {
  
  /*
    DO FAKER STUFF HERE, REBUILD SOMETHING THAT LOOKS LIKE THE CHUTE API
  */
  

	var FAKE_DATA = [];

	for (i=0; i<=11; i++) {

		var data = {};

		data.name = faker.name.firstName();
		data.image = faker.image.image();

		FAKE_DATA.push(data);
	};
	

		
	
  
  res.send({FAKE_DATA})
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})