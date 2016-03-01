var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
    contactPoints: ['61.28.116.34'],
    keyspace: 'packt'
});

module.exports = {
    save: function (name, age) {
        return new Promise((resolve, reject) => {
            var query = 'INSERT INTO person (name, age) VALUES (?, ?)';
            return client.execute(query, [name, age], {prepare: true}, function (err) {
                if (err)
                    return reject(err);
                return resolve();
            });
        });
    },
    findAll: function () {
        return new Promise((resolve, reject) => {
            var query = 'SELECT * FROM person';
            return client.execute(query, [], {prepare: true}, function (err, result) {
                if (err)
                    return reject(err);
                return resolve(result.rows);
            });
        });
    }
};



