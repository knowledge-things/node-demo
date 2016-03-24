/**
 * http://usejsdoc.org/
 */
var CRUD = require('../database/mongoDBUtil');
var status = require('../database/status');


exports.getUsersByNames = function(names,callback) {
	if(names.length === 0){
		return callback(null,[]);
	}
	var cond = {
		username:{$in:[names]}
	};
	console.log(cond);
	return new CRUD('user').read(cond, callback);
};