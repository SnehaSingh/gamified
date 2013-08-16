var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
db.auth(redisURL.auth.split(":")[1]);


exports.submit = function(req, res){

  /*db.get("Q1", function (err, reply) {
        console.log(reply.toString());
  });*/
  var radio = req.param('q1radio');
  var option1Count = 0;
  if(radio == "option1")
  {
  	/*
  	db.get("op1", function (err, reply) {
  		
  		option1Count = parseInt(reply) + 1;
        console.log(option1Count);
    });
    db.set("op1",option1Count.toString());
    */
    db.incr("op1");
   	db.get("op1", function (err, reply) {
        console.log(reply.toString());
    });
  	console.log("DEBUG: option1 selected");
  }
  else if(radio == "option2")
  {
    db.incr("op2");
   	db.get("op2", function (err, reply) {
        console.log(reply.toString());
    });
  	console.log("DEBUG: option2 selected");
  }
  else if(radio == "option3")
  {
    db.incr("op3");
   	db.get("op3", function (err, reply) {
        console.log(reply.toString());
    });
  	console.log("DEBUG: option3 selected");
  }
  res.render('submitted'); 
};