// xiaolege-nodeFrame v0.1

// 全局变量定义
global.BASE_DIR = __dirname;
global.CORE = BASE_DIR + '/core/';
global.CONF = BASE_DIR + '/conf/';
global.HOST = '127.0.0.1';
global.USER = 'root';
global.PASSWORD = '';
global.DATABASE = 'chat';

// modules引入
global.http = require('http');
global.fs = require('fs');
global.path = require('path');
global.url = require('url');
global.querystring = require('querystring');
global.ejs = require('ejs');
global.prourl = require(CORE + 'prourl');
global.mytpl = require(CORE + 'mytpl');
global.action = require(CORE + 'action');
global.mine = require(CONF + 'mine').mine;
global.mysql = require(CORE + 'mysql');	

// 加载路由规则
require(CONF + 'route');

var nodeMvcServer = require(CORE + 'server'); 
nodeMvcServer.runServer();