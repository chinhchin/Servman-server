import https from 'https';
import fs from 'fs';

https.createServer({
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
},
    (req, res) => {
        res.end('hello from secure data');
    }
).listen(443);
