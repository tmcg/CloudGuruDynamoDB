
var credentials = {
	accessKeyId: process.env.ACCESS_KEY_ID,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
	region: 'ap-southeast-2'
}

var dyn = require('dynasty')(credentials);

// List Tables
dyn.list()
	.then(function(resp) {
		console.log('TABLES:');
		console.log(resp.TableNames);
	})
	.catch(function(err) {
		console.log('ERROR: '+err);
	});
	


