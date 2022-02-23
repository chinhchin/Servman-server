import https from 'https';
import http from 'http';
import fs from 'fs';

//server
import { HttpsServer } from './servers/httpsServer';

class Main {
    constructor() {
        new HttpsServer();
    }
}

const main = () => new Main();

main();
