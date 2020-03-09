var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(req,res){
	res.send('user list');
});

app.listen(port,function(){
	console.log('Listening from port 3000')
});