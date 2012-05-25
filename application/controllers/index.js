/**
 * index方法
 */
exports.index = function(){
	if (this.req.post.user) {
		this.success('提示消息', 60, 'http://127.0.0.1:8080/');
	}				
 
	this.render('index.ejs', {
    	msg : '中文！'
    });
};