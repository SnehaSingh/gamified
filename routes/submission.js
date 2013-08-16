var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
db.auth(redisURL.auth.split(":")[1]);


exports.submit = function(req, res){
  var radio = req.param('q1radio');
  var option1Count = 0;
  if(radio == "option1")
  {
    db.incr("op1");
  	console.log("DEBUG: option1 selected");
  }
  else if(radio == "option2")
  {
    db.incr("op2");
  	console.log("DEBUG: option2 selected");
  }
  else if(radio == "option3")
  {
    db.incr("op3");
  	console.log("DEBUG: option3 selected");
  }
  res.render('submitted'); 
};