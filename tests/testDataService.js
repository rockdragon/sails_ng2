const spawn = require('child_process').spawn;
const path = require('path');
const debug = require('debug')('test');
const appPath = [path.join(__dirname, '../server/app.js')];
const get = require('./utility').get;

describe('Data Service', function() {
    var child = null;

    before((done) => {
        child = spawn('node', appPath);
        debug('sails app pid:', child.pid);

        child.stdout.on('data', (data) => {
            debug('output', data.toString());
            return setTimeout(done, 2000);
        });
    });

    it('Retrieve Data From Service', (done) => {
        get('http://localhost:1337/api/people')
            .then(res => {
                res.should.not.be.null;
                console.log(res);
                return done();
            })
            .catch(err => {throw err;});
    });

    after(() => {
        if(child) {
            child.kill();
        }
    });
});