import https from 'https'
import fs from 'fs'

export class HttpsServer {
    port: number;
    server;
    constructor(port = 443) {
        this.port = port;
        this.server = https.createServer(
            {
                cert: fs.readFileSync('./cert/cert.pem'),
                key: fs.readFileSync('./cert/key.pem'),
                ca: fs.readFileSync('./cert/chain.pem')
            },
            (req, res) => {
                res.end('Hello World!\nfrom secure server.');
            }
        ).listen(this.port);
    }


}
