/**
 * index方法
 */
exports.index = function(){
	console.log(req.method + '：' + req.url + '-' + 'i：' + i);
	if (post.user) {
		this.render('public/alert.ejs');
	}				
 
	this.render('index.ejs', {
    	msg : '中文！'
    });
};

// 我的文档