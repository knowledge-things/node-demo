var crypto = require('crypto');
var CRUD = require('../database/mongoDBUtil');
var status = require('../database/status');
var uuid    = require('node-uuid');

exports.register = function(req, res, next) {
	res.render('register',{title:'用户注册'});
};

exports.submit = function(req, res, next) {
	var md5 = crypto.createHash('md5'); 
	var password = md5.update(req.body.password).digest('hex'); 
	var user = {
		id : uuid.v4(),
		username : req.body.username,
		password : password
	};
	console.log(user);
	new CRUD('user').create(user,function(data){
		if(data.status){
			return res.redirect('login');
		}
		return res.send(status.fail);
	});
	
};