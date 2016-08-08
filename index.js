
var credentials = {
	accessKeyId: process.env.ACCESS_KEY_ID || '',
	secretAccessKey: process.env.SECRET_ACCESS_KEY || '',
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

// List all Items
var guruTable = dyn.table('CloudGuruNoSQL');

guruTable.scan()
	.then(function(resp) {
		console.log('ITEMS:');
		console.log(resp);
	})
	.catch(function(err) {
		console.log('ERROR: '+err);
	});;

/*
console.log('UPDATING ITEM:');
guruTable.find(1)
	.then(function(resp) {
		var superpowers = resp.superpowers || [];
		superpowers.push('dynamodb');
		return guruTable.update(resp.guru_id,{ superpowers: superpowers });
	})
	.then(function(resp) {
		console.log(resp);
	})
	.catch(function(err) {
		console.log('ERROR: '+err);
	});
*/

