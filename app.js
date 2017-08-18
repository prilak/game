var express = require("express");

var app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
});

// var jsonfile = require('jsonfile')
 
// var file = 'public/data.json';
// var obj = {name: 'JP'};
 
// jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
//   console.error(err)
// });