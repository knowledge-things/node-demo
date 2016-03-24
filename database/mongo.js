/**
 * http://usejsdoc.org/
 */
var mongoskin = require('mongoskin');
var config = require('./settings');

module.exports = (function(){
   var host = config.HOST,
   port = config.PORT,
   dbName = config.DB,
   userName = config.USERNAME,
   password = config.PASSWORD,
   str = 'mongodb://' + userName + ':' + password + '@' + host +':' + port+ '/' + dbName;
   var option = {
        native_parser: true
   };

   return mongoskin.db(str, option);
})();