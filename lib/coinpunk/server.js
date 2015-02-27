var express    = require('express');
var ejs        = require('ejs');
var redis      = require('redis');
var request    = require('request');
var Bitcoind   = require('./server/bitcoind');
var RedisDB    = require('./server/db/redis');
var sockjs     = require('sockjs');
var http       = require('http');
var https      = require('https');
var fs         = require('fs');
var routes     = require('./routes.js');

var Server = function (config) {
  this.config = config;
  this.bitcoind = new Bitcoind(config.bitcoind);
  this.db = new RedisDB();
  this.express = express();

    /*this.express.engine('.html', require('ejs').__express);
    this.express.set('views',__dirname+'/../../public/templates');
    this.express.set('view engine', 'html');
    this.express.set('view options', { layout: true, root: __dirname + '/../../public/templates' } );
    this.express.get('/page1', function(req, res){
        res.render('main', { name: "Sasai Lalka"});
    });*/


  // Set up the Express server.
  this.express.use(express.json());
  this.express.use(express.urlencoded());
  this.express.use(express.static('public'));
  this.express.use(function(err, req, res, next){
    console.error(err.stack);
    res.send({error: true});
  });

  // Set up our websocket.
  this.websocket = sockjs.createServer({log: function(severity, message) {}});

  // Export public module things.
  this.exportProperties();
};

Server.prototype.start = function () {
  var that = this;

  // Set up routes, connect databases.
  that.db.connect();
  routes.create(that.express, that.db, that.bitcoind, that.websocket);

  if(that.config.httpsPort || that.config.sslKey || that.config.sslCert) {
    var httpsServer = https.createServer({
      key: fs.readFileSync(that.config.sslKey, 'utf8'),
      cert: fs.readFileSync(that.config.sslCert, 'utf8')
    }, that.express);

    that.websocket.installHandlers(httpsServer, {prefix:'/listener'});
    module.exports.httpsServer = httpsServer;

    module.exports.httpServer = http.createServer(function(req, res) {
      var host = req.headers.host;
      if(typeof host == "undefined")
        return res.end();
      res.statusCode = 302;
      var host = req.headers.host;
      var hostname = host.match(/:/g) ? host.slice(0, host.indexOf(":")) : host;
      res.setHeader('Location', 'https://'+hostname+':'+that.config.httpsPort+'/');
      res.end();
    });
  } else {
    /*console.log('Warning: You are not running in SSL mode!');*/

    var httpServer = http.createServer(that.express);
    that.websocket.installHandlers(httpServer, {prefix:'/listener'});
    module.exports.httpServer = httpServer;
  }
};

Server.prototype.exportProperties = function () {
  module.exports.config = this.config;
  module.exports.express = this.express;
};

module.exports.Server = Server;