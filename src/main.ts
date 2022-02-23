import https from 'https';
import http, { RequestListener } from 'http';
import fs from 'fs';

//servers
import { HttpsServer } from './servers/httpsServer';
import { HttpServer } from './servers/httpServer';

//models
import { ConfigModels } from './models/configModel';

class Main {
    config: ConfigModels = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

    constructor() {
        this.config.server.ssl ? new HttpsServer(this.config.server.port, this.mainServer) : new HttpServer(this.config.server.port, this.mainServer);
    }

    public mainServer: RequestListener = (req, res) => {
        if (this.config.domain.isAutoCorrectDomainName && req.headers.host !== this.config.domain.domainName) {
            res.writeHead(301, { "Location": `${this.config.domain.domainName}` + req.url });
            res.end();
            return;
        }

        res.writeHead(200);
        res.end('Hello World!');
    };
}

const main = () => new Main();

main();
