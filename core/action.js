/**
 * 成功的消息提示框
 * @param string mess 提示消息
 * @param integer timeout 跳转时间
 * @param string location 提示消息
 */
exports.success = function(req, res, mess, timeout, location) {
	mess = mess || '提示信息';
	timeout = timeout || 1;
	location = location || '';
	pub(req, res, mess, timeout, location, true); //如果成功 $mark=true
    return;
};

exports.handler404 = function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
};

exports.handler500 = function(req, res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('500 Internal Server Error');
};

function pub(req, res, mess, timeout, location, mark) {
	if (location == '') {
		location = 'window.history.back();';
	} else {
		location = 'window.location=' + "'" + location + "'";
	}
	mytpl.viewEngine.render(req, res, 'public/success.ejs', {
    	mess : mess,
    	timeout : timeout,
    	location : location,
    	mark : mark
    });
}