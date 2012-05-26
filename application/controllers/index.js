/**
 * index方法
 */
exports.index = function(){
	var req = this.req;
	var res = this.res
	var dal_db = functions.D();
	var post = this.req.post;
	
	if (post.user) {
		var data = new Array();
		data['user'] = post.user;
		data['pwd'] = post.pwd;
		
		dal_db.insert(data, function(id, err) {
			if (!err) {
				this.success('添加成功', 60, 'http://127.0.0.1:8080/');
			} else {
			    res.writeHead(200, {'Content-Type': 'text/plain'});		
			    res.end(err);
			}
		});
	}				
 
	this.render('index.ejs', {
    	msg : '中文！'
    });
};