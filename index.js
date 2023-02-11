import http from 'http';

const server = http.createServer((req, res) => {
	res.end('Sendeddd');
});

server.listen(2000);
