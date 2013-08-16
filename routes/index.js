
/*
 * GET home page.
 */

var redis = require('redis');
var db = redis.createClient();

exports.index = function(req, res){

	//db.mset(["Q1", "0", "Q2", "0"], function (err, res) {});
    //db.mset(["op1","0","op2","0","op3","0"], function (err, res) {});
    //db.get("test keys 1", function (err, reply) {
    //    console.log(reply.toString());
    //});

	res.render('index', { title: 'Gamified' });
};