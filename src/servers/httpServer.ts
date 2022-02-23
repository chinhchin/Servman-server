import http from 'http';

export class HttpServer {
    server;
    constructor(port:number = 80, reqListener: http.RequestListener) {
        this.server = http.createServer(
            reqListener
        ).listen(port);
    }
}
