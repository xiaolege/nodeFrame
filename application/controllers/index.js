/**
 * index方法
 */
exports.index = function(){
	if (post.submit != undefined) {
		console.log(post.user + '-' + post.pwd);
		
		var dal_mysql = new mysql.mysql();
		dal_mysql.insert(post.user, post.pwd);
		
		action.success('提示信息', 60);
	}
	
	this.render('index.ejs', {
    	msg : '中文！'
    });
};