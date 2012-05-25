/**
 * index方法
 */
exports.index = function(){
	if (post.user) {
		//alert(post.user + '-' + post.pwd);
		
		//var dal_mysql = new mysql.mysql();
		//dal_mysql.insert(post.user, post.pwd);
		
		//action.success('提示信息', 60);
		this.render('public/alert.ejs');
	}				
	
	this.render('index.ejs', {
    	msg : '中文！'
    });
};

// 我的文档