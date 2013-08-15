 var redis = require('redis');
 var db = redis.createClient();

exports.submit = function(req, res){

  /*db.get("Q1", function (err, reply) {
        console.log(reply.toString());
  });*/
  var radio = req.param('q1radio');
  if(radio == "option1")
  {
  	console.log("bingo");
  }
  console.log(req.param('q1radio'));

   
  res.send("This is the submission");
};