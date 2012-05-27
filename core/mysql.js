var mysql = require('mysql');

exports.mysql = function() {
	
	var client = null;
	
	/**
	 * 用于获取数据库连接mysql对象
	 */
	this.connect = function() {
		if (client == null) {			
			var client = mysql.createClient({
				host : HOST,
				user : USER,
				password : PASSWORD,
				database : DATABASE
			});
			client.query('SET NAMES "utf8"');
			return client;			
		} else {
			return client;
		}
	}
	
	/**
	 * 向数据库中插入一条记录
	 * @param array data 
	 * @param function callback
	 */
	this.insert = function(data, callback) {
		var key = array.array_add( array.array_keys(data) , '`').join(',');
		var	value = array.array_add( array.array_values(data) , "'").join(',');
		
		var sql = "INSERT INTO `chat`.`chat_user` (" + key + ") VALUES (" + value + ")";
		console.log(sql);
		
		client = this.connect();
		client.query(sql, function(err, info) {
			if (err) {
				callback('', err.message);
			
			} else {
				callback(info.insertId, '');
			}
		});
	}
	
	/**
	 * 更新数据表中指定条件的记录
	 */
	this.update = function(array) {
		
	}
}