var connect = require('connect')
    , http = require('http');

/*
 * You are adding code but doing the same thing. Why would you use connect?
 * By adding connect then you get access to all of it's created middleware
 *      * csrf
 *      * basicAuth
 *      * bodyParser
 *      * json
 *      * multipart
 *      * urlencoded
 *      * cookieParser
 *      * directory
 *      * compress
 *      * errorHandler
 *      * favicon
 *      * limit
 *      * logger
 *      * methodOverride
 *      * query
 *      * responseTime
 *      * session
 *      * static
 *      * staticCache
 *      * vhost
 *      * subdomains
 *      * cookieSession
 */
var app = connect()
    .use(connect.static(__dirname + '/public'))
    .use(function(req, res){
        res.end('Hello World!\n');
    });

http.createServer(app).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');