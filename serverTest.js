const TcpServer = require('./socketTest');

let transport = new TcpServer({
	port:10101,
	host:'0.0.0.0'
});

transport.start();

console.log("Server start!");
