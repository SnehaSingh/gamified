var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
db.auth(redisURL.auth.split(":")[1]);


exports.instructor = function(req, res){
    db.mget("op1","op2","op3", function (err, reply) {
		var data = {};
        reply.forEach(function (reply, index) {
        		data[index] = reply.toString();
        });
	    res.render('instructor', { data: data});	
    });
};
