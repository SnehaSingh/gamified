
/*
 * GET home page.
 */

var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
db.auth(redisURL.auth.split(":")[1]);

exports.index = function(req, res){
	res.render('index', { title: 'Gamified' });
};