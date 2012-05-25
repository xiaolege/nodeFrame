// 根据http请求的method来分别保存route规则
var routes = {get:[], post:[]};

/**
 * 注册route规则
 */
exports.map = function(dict) {
    if (dict && dict.url && dict.controller) {
        var method = dict.method ? dict.method.toLowerCase() : 'get';
        
        routes[method].push({
        	url : dict.url, // url匹配正则
        	action : dict.action || 'index',
        	controller : dict.controller,
        	application : dict.application
        });
    }
};

exports.getActionInfo = function(url, method) {
    var r = {controller : null, action : null, args : null},
        method = method ? method.toLowerCase() : 'get',
        		
        // url: /blog/index?page=1 ,则pathname为: /blog/index
        pathname = global.url.parse(url).pathname;
        
    var m_routes = routes[method];
    
    for (var i in m_routes) {		
    	
        // 正则匹配
        r.args = m_routes[i].url.exec(pathname); 
        if (r.args) {
        	r.action = m_routes[i].action;
            r.controller = m_routes[i].controller;
            r.application = m_routes[i].application;
            r.args.shift(); // 第一个值为匹配到的整个url，去掉
            break;
        }
    }
    
    // 如果匹配到route，r大概是 {controller:'blog', action:'index', args:['1']}
    return r;
};