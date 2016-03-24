/**
 * 所有路由访问配置文件 
 */
var express = require('express');
var sign = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');

var router = express.Router();

router.get('/',sign.index);
router.get('/login',sign.loginGet);
router.post('/login',sign.loginPost);
router.get('/logout',sign.logout);
router.get('/home',sign.home);
router.get('/register',register.register);
router.post('/register',register.submit);
router.get('/chat',function(req, res){
	res.render('chat',{user:req.session.user});
});


module.exports = router;




