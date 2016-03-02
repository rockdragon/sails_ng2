const http = require('http');
const debug = require('debug')('test');

module.exports.get = function(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            debug(`Got response: ${res.statusCode}`);
            var chunks = [];
            res.on('data', (chunk)=>{
               chunks.push(chunk);
            });
            res.on('end', ()=>{
                return resolve(Buffer.concat(chunks).toString());
            });
        }).on('error', (e) => {
            return reject(e);
        });
    });
};
