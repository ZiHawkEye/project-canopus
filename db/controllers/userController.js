var User = require('../models/user');

// important: implement hashing, pw authorization, validation, sanitisation, error handling

// search for a user via POST
exports.user_search = function(req, res) {
    var {username, password} = req.body;
    var user = (password === undefined) ? {username} : {username, password};
    User.findOne(user).exec((err, results) => {
        if (err) throw err;
        var verdict = (results === null) ? false : true;
        res.send(verdict);
    })
};

// search for a user via GET - for testing only
exports.user_search_get = function(req, res) {
    var {username, password} = req.query;
    var user = (password === undefined) ? {username} : {username, password};
    User.findOne(user).exec((err, results) => {
        if (err) throw err;
        res.send(results);
    })
};

// create new user via PUT
exports.user_create = function(req, res) {
    var {username, password} = req.body;
    var promise = User.create({username, password}, (err, results) => {
        if (err) throw err;
        console.log("created");
        res.send(results);
    })
};

// create new user via GET - for testing only
exports.user_create_get = function(req, res) {
    var {username, password} = req.query;
    var promise = User.create({username, password}, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
};

// update user via PATCH
exports.user_update = function(req, res) {
    var {username, old_password, new_password} = req.body;
    var query = User.findOneAndUpdate({username, password: old_password}, {password: new_password}, {new: true});
    query.exec((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

// update user via GET - for testing only
exports.user_update_get = function(req, res) {
    var {username, old_password, new_password} = req.query;
    var query = User.findOneAndUpdate({username, password: old_password}, {password: new_password}, {new: true});
    query.exec((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

// delete user via DELETE
exports.user_delete = function(req, res) {
    var {username, password} = req.body;
    var query = User.findOneAndRemove({username, password});
    query.exec((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

// delete user via GET - for testing only
exports.user_delete_get = function(req, res) {
    var {username, password} = req.query;
    var query = User.findOneAndRemove({username, password});
    query.exec((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};
