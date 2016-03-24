/**
 * 对没有登录的用户进行拦截
 */

exports.authentication = function (req, res, next) {
	var url = req.originalUrl;
	console.log(url);
	if(url !=='/login' && url !=='/' && url!=='/register' && !req.session.user){
		req.session.error='你还没有登录';
		return res.redirect('/login');
	}
	next();
};
