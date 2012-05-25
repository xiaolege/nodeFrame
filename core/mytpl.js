exports.viewEngine = {
    render : function(req, res, viewName, context) {
		var filename = BASE_DIR + '/' + req.actionInfo.application + '/views/' + viewName;
		
		path.exists(filename, function(exists) {			
	        if (!exists) {  
	            action.handler404(req, res);  
	            return;
	        }    
	        
	        fs.readFile(filename, 'utf8', function(err, file) {  
	            if (err) {
	            	action.handler500(req, res);
	            	console.log(err);
	                return;
	            }

	            // 将全局变量分配到模板中
	            context = context || {};
	            context.base_dir = BASE_DIR;
	            context.public = '/public';
	            context.view = '/' + req.actionInfo.application + '/views';
	            context.res = '/' + req.actionInfo.application + '/views/resource';           
	            var file = ejs.render(file, context);
	            
	            res.writeHead(200, {'Content-Type': 'text/html'});
	            res.write(file, 'utf8');
	            res.end();
	        });  
	    });
    }
};

exports.staticFileServer = function(req, res, filePath) {
    if (!filePath) {
    	filePath = BASE_DIR + '/' + url.parse(req.url).pathname;
    }

    path.exists(filePath, function(exists) {    	
        if (!exists) {  
            action.handler404(req, res);
            return;
        }  
        
        fs.readFile(filePath, 'utf8', function(err, file) {
            if (err) {
            	action.handler500(req, res);
            	console.log(err);
                return;  
            }
            
            var ext = path.extname(filePath);
            ext = ext ? ext.slice(1) : 'html';
            
            res.writeHead(200, {'Content-Type': mine[ext] || 'text/html'});
            res.write(file, 'utf8');
            res.end();
        });  
    });
};