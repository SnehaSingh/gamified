var redis = require('redis');
var db = redis.createClient();


exports.instructor = function(req, res){
    db.mget("op1","op2","op3", function (err, reply) {
		var data = {};
        reply.forEach(function (reply, index) {
        		data[index] = reply.toString();
        });
	    res.render('instructor', { data: data});	
    });
};
