var Dmysql = require('mysql');
var client = Dmysql.createClient({
	host : HOST,
	user : USER,
	password : PASSWORD,
	database : DATABASE
});

client.query('SET NAMES "utf8"');

function mysql() {
	
	/**
	 * 用于获取数据库连接mysql对象
	 */
	this.connect = function() {
		
	}
	
	/**
	 * 向数据库中插入一条记录
	 */
	this.insert = function(user, pwd) {
		client.query("INSERT INTO `chat`.`chat_user` (`uid`, `user`, `pwd`) VALUES (NULL , '" + user + "', '" + pwd + "')");
	}
	
	/**
	 * 更新数据表中指定条件的记录
	 */
	this.update = function(array) {
		
	}
}
global.client = client;
exports.mysql = mysql;