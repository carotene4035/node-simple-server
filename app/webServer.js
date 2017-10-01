/** module読み込み */
var http = require('http');
var url = require('url');
var fs = require('fs');

/** サーバ構築 */
var server = http.createServer();

server.on('request', function(req, res) {
  var Response = {
    /**
     * topページ表示
     */
    'renderHTML': function () {
      /** ファイル読み込み */
      var template = fs.readFile('./template/index.html', 'utf-8', function(err, data) {
        /** header生成 */
        res.writeHead(200, {
          'content-Type': 'text/html'
        });
        /** body出力 */
        res.write(data);
        res.end('html file has already sent to browser');
      });
    },

    /**
     * 次のページ表示
     */
    'resultGenerator': function() {
      /** ファイル読み込み */
      var template = fs.readFile('./template/result.html', 'utf-8', function(err, data) {
        /** header生成 */
        res.writeHead(200, {
          'content-Type': 'text/html'
        });
        /** body出力 */
        res.write(data);
        res.end('html file has already sent to browser');
      });
    }
  }

  /** urlのパース */
  var uri = url.parse(req.url).pathname;

  /** routing */
  if (uri === '/') {
    Response['renderHTML']();
    return;
  } else if (uri == '/result') {
    Response['resultGenerator']();
    return;
  }
});

server.listen(8080);
console.log('server running at http://localhost:8000/');
