
module.exports = {
    people: function(req, res) {
        var method = req.method.toUpperCase();
        if(method === 'GET') {
            DataService.findAll()
                .then(people => res.json(people))
                .catch(err => res.status(500).send(err));
        } else if(method === 'POST') {
            if (!req.body) return res.forbidden();

            DataService.save(req.body.name, req.body.age)
                .then(_ => res.json({}))
                .catch(err => res.status(500).send(err));
        } else {
            return res.forbidden();
        }
    }
};