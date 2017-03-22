var express = require('express')
var app = express()
var faker = require('faker');

app.get('/album/123/assets', function (req, res) {
  
  /*
    DO FAKER STUFF HERE, REBUILD SOMETHING THAT LOOKS LIKE THE CHUTE API
  */
  

	var FAKE_DATA = [];

	for (i=0; i<=11; i++) {

		var data = {};

		//figure out how to put data in this order, not alphabetical

		data.id = faker.random.number();
		
		data.links = {
			self: {
				href: faker.image.imageUrl(),
				title: 'AlbumAsset Details'
			},
			exif: {
				href: faker.image.imageUrl(),
				title: 'Exif Details'
			},
			geo: {
				href: faker.image.imageUrl(),
				title: 'Geo Details'
			},
			heart: {
				href: faker.image.imageUrl(),
				title: 'Hearts'
			},
			vote: {
				href: faker.image.imageUrl(),
				title: 'Votes'
			}
		};
		
		data.created_at = faker.date.past();
		data.updated_at = faker.date.recent();
		data.asset_id = faker.random.number();
		data.shortcut = faker.lorem.word();
		data.type = 'image';
		data.caption = faker.lorem.sentence();
		data.album_id = '123';
		
		data.source = {
			service: 'instagram',
			source: 'import',
			source_id: faker.random.number(),
			import_id: faker.random.number(),
			import_url: faker.image.imageUrl(),
			source_url: faker.image.imageUrl()
		};
		
		data.service = 'instagram';
		data.username = faker.name.firstName();
		
		data.tags = [

			//change this to a function

			faker.lorem.word(),
			faker.lorem.word(),
			faker.lorem.word()
		];
		
		data.metadata = {};
		data.hearts = faker.random.number();
		data.votes = faker.random.number();
		data.thumbnail = faker.image.imageUrl();
		data.url = faker.image.image();

		data.dimensions = {
			height: 640,
			width: 480
		};

		data.user = {
			id: faker.random.number(),
			
			links: {
				self: {
					href: 'localhost3000/users',
					title: 'User Details'
				},
				apps: {
					href: 'localhost3000/apps',
					title: 'Apps List'
				}
			},

			created_at: faker.date.past(),
			updated_at: faker.date.recent(),
			name: faker.name.findName(),
			username: faker.name.firstName(),
			avatar: faker.internet.avatar(),
			last_login: faker.date.recent()
		};

		data.account = {
			id: faker.random.number(),
			created_at: faker.date.past(),
			updated_at: faker.date.recent(),
			shortcut: faker.lorem.word(),
			uid: faker.random.number(),
			type: 'instagram',
			name: faker.lorem.sentence(),
			username: faker.name.firstName(),
			avatar: faker.internet.avatar()
		};


		FAKE_DATA.push(data);
	};
	

		
	
  
  res.send({FAKE_DATA})
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})