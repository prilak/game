var express = require("express");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
});
app.get("/", function(req, res){
	res.render("home");
	//res.send("welcome to my cookbook");
});
// var jsonfile = require('jsonfile')
 
// var file = 'public/data.json';
// var obj = {name: 'JP'};
 
// jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
//   console.error(err)
// });