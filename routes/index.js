/* GET home page. */
var user = require('../proxy/user');
var crypto = require('crypto');

exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

exports.loginGet = function(req,res){
	if(req.session.user){
		res.redirect('/home');
	}
	res.render('login',{title:'用户登录'});
};

exports.loginPost = function(req, res) {
	var username = req.body.username;
	var password = crypto.createHash('md5').update(req.body.password.trim()).digest('hex');
	user.getUsersByNames(username, function(data) {
		var user = data.items[0];
		if(!data.status){
			req.session.error='登录失败，发生未知错误';
			res.redirect('login');
			return ;
		}if(!user){
			req.session.error='登录失败，该用户不存在';
			res.redirect('login');
			return ;
		}if(password !== user.password){
			req.session.error='登录失败，密码错误';
			res.redirect('login');
			return ;
		}
		req.session.user = user;
		res.redirect('/home');
		
		
	});
};

exports.logout = function(req,res){
	req.session.user = null;
	res.redirect('/');
};

exports.home = function(req,res){
	res.render('home',{title:'Home'});
};
