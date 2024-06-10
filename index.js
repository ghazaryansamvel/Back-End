import {createServer} from "http";

const server = createServer((req, res) => {
    res.writeHead(200, {"content-Type" : "text/plain"});
    res.end("Hello World");
});

server.listen(3000);