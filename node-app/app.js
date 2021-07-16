// require('http').createServer((rq,rs) => {rs.end('Hello node.js!');}).listen('3000');

// const http = require('http');

// let server = http.createServer((req, res) => { res.end('<html><body><h1>Hello</h1><p>Welcome to node.js</p></body></html>'); });

// server.listen('3000');



const http = require('http');
const fs = require('fs')

let server = http.createServer(
    getFromClient
  //   console.log('start');
  //   res.setHeader('Content-Type', 'text/html')
  // res.write('<!DOCTYPE html><html lang="ja"');
  // res.write('<head><meta charset="utf-8">');
  // res.write('<title>Hello</title></head>');
  // res.write('<body><h1>Hello Node.js!</h1>');
  // res.write('<p>This is Node.js sample page.</p>');
  // res.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
  // res.write('</body></html>');
  // res.end();
);
server.listen('3000');
console.log('Server start!');

// ここまでメインプログラム

// createServerの処理
function getFromClient(req, res) {
  fs.readFile('./index.html', 'UTF-8', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}