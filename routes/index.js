
/*
 * GET home page.
 */

var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
db.auth(redisURL.auth.split(":")[1]);

exports.index = function(req, res){

	//db.mset(["Q1", "0", "Q2", "0"], function (err, res) {});
    //db.mset(["op1","0","op2","0","op3","0"], function (err, res) {});
    //db.get("test keys 1", function (err, reply) {
    //    console.log(reply.toString());
    //});

	res.render('index', { title: 'Gamified' });
};