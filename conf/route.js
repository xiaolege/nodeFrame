// GET
prourl.map({
	url : /^\/$/i,
    method : 'get',
    action : 'index',
    controller : 'index',
    application : 'application'
});

prourl.map({
	url: /^\/index\/?$/i,
    method : 'get',
    action : 'index',
    controller : 'index',
    application : 'application'
});

prourl.map({
	url: /^\/u\/?$/i,
    method : 'get',
    action : 'index',
    controller : 'index',
    application : 'u'
});

// POST
prourl.map({
	url : /^\/$/i,
    method : 'post',
    action : 'index',
    controller : 'index',
    application : 'application'
});

prourl.map({
	url: /^\/index\/?$/i,
    method : 'post',
    action : 'index',
    controller : 'index',
    application : 'application'
});

prourl.map({
	url: /^\/u\/?$/i,
    method : 'post',
    action : 'index',
    controller : 'index',
    application : 'u'
});