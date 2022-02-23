import https from 'https';
import http from 'http';
import fs from 'fs';
import { RequestListener } from 'http';

export class HttpsServer {
    server;
    constructor(port:number = 443, reqListener: RequestListener) {
        this.server = https.createServer(
            {
                cert: fs.readFileSync('./cert/cert.pem'),
                key: fs.readFileSync('./cert/key.pem'),
                ca: fs.readFileSync('./cert/chain.pem')
            },
        reqListener
        ).listen(port);
    }
}
