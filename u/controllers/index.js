/**
 * index方法
 */
exports.index = function(){
    this.render('index.ejs', {
    	msg : 'Hello World'
    });
};