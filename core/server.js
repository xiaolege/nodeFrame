exports.runServer = function(port) {
    port = port || 8080;
    
    var server = http.createServer(function(req, res) {
    	if (req.url === '/favicon.ico') {
    		return;
    	}
    	
    	req.setEncoding('utf8'); // 请求编码  
        var _postData = '';
        
        req.on('data', function(chunk) {
    	    _postData += chunk;    
   	    
        }).on('end', function() {
            req.post = querystring.parse(_postData);
            
    	    handlerRequest(req, res);
    	});
        
    }).listen(port);
    
    console.log('Server running at http://127.0.0.1:' + port + '/');
};

/**
 * 所有请求的统一入口
 */
var handlerRequest = function(req, res) {
	console.log(req.method + '：' + req.url);
	
    var actionInfo = prourl.getActionInfo(req.url, req.method);
    req.actionInfo = actionInfo;
 
    if (actionInfo.action) {    
        var controller = require(BASE_DIR + '/' + actionInfo.application + '/controllers/' + actionInfo.controller);
        
        if (controller[actionInfo.action]) {        	
            var ct = new controllerContext(req, res);

            // 通过apply将controller的上下文对象传递给action
            controller[actionInfo.action].apply(ct, actionInfo.args);
         
        } else {
            handler500(req, res, 'Error: controller "' + actionInfo.controller + '" without action "' + actionInfo.action + '"')
        }
    } else {
        mytpl.staticFileServer(req, res);
    }
};

// controller的上下文对象
var controllerContext = function(req, res) {
    this.req = req;
    this.res = res;
    this.handler404 = action.handler404;
    this.handler500 = action.handler500;
};
controllerContext.prototype.render = function(viewName, context) {
    mytpl.viewEngine.render(this.req, this.res, viewName, context); 
};
controllerContext.prototype.success = function(mess, timeout, location) {
	action.success(this.req, this.res, mess, timeout, location);
}