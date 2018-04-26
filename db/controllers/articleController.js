const assert = require('assert');
var Article = require('../models/article');

// use req.params instead of req.query for readability of urls
// optional params use req.query, else use req.params

// display an article via GET
exports.article = function(req, res) {
    var id = req.params.article_id;
    var query = Article.find({_id: id}, (err, results) => {
        if (err) throw err;
        // results contains article json
        res.json(results);
    })
};

// search for articles via GET
// expose mongoose query via express - does it decouple the client and server?
exports.article_search = function(req, res) {
    // when using req.query, all inputs should be sanitised and validated since it depends on user input
    // db.find(conditions, projectors, options).exec((err, results) => {})
    // use cursors, streams, eventlisteners, generators?
    // req query only contains strings
    // use mongoose query builder for query conditions (FIND WHERE EQUALS GT IN)? nah too much work
    // encode json in url for query and sacrifice readability for laziness? yes
    // look into full text search for mongoose (wildcard text index)
    // otherwise implement manually: stop words, weighting, fields to search
    var is_return_all = (req.query.is_return_all == "true") ? true : false;
    var projectors = is_return_all ? null : req.query.projectors; // null is equivalent to 'author, title, desc, date, tags, text'

    // needs type casting? or hope for automatic type conversion
    var {tailable, sort, limit, skip, maxscan, batchSize, comment, snapshot, readPreference, hint, maxTimeMs, collation} = req.query;
    var options = {tailable, sort, limit, skip, maxscan, batchSize, comment, snapshot, readPreference, hint, maxTimeMs, collation};
    // iterates through all properties and deletes all undefined fields, should not skip any fields even after deletion of a field
    // alternatively find default value of all options?
    for (var option in options) {
        if (options[option] === undefined) {
            delete options[option];
        }
    }

    // search all fields with same values(no json), search particular fields with same values(no json), 
    // search particular fields with particular values and modifiers(uses_json)
    var is_json = (req.query.use_json == "true") ? true : false;
    if(is_json) {
        var conditions = (req.query.conditions === undefined) ? {} : JSON.parse(req.query.conditions); // should be a json string - needs further validation and processing
        assert.ok(conditions instanceof Object);
        var query = Article.find(conditions, projectors, options);
        var promise = query.exec((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    } else {
        var q = (req.query.q === undefined) ? "": req.query.q ;
        var keys = (req.query.keys === undefined) ? ["author", "title", "desc", "date", "tags", "text"] : eval(req.query.keys);
        // console.log('q: ' + q);
        // console.log('keys: ' + keys); 
        // example url: /api/article/search?q=author&keys=["author", "title", "desc"]
        assert.ok(keys instanceof Array);
        var promise_array = keys.map(key => {
            var temp_query = Article.find({[key]: q}, projectors, options); // use regex and wildcards? not efficient though
            // apparently if a callback function is included in .exec() no promise is returned?
            var temp_promise = temp_query.exec().then(result => {
                // if (err) throw err;
                return result;
            });
            assert.ok(temp_promise instanceof Promise);
            return temp_promise;
        });
        // console.log('promise_array: ' + promise_array);
        var promise = Promise.all(promise_array).then(results_array => {
            // console.log('results_array: ' + results_array);
            var results = [];
            var i, len;
            // using for in loop is dangerous so don't
            for(i = 0, len = results_array.length; i < len; i++) {
                results = results.concat(results_array[i]);
            }
            res.send(results);
        })
    }
};

// create new article via PUT - access info via req.body just like POST
// define default values of article via mongoose not here
// are defaults used when values are undefined/incorrect? or only when field is missing
exports.article_create = function(req, res) {
    var {author, title, desc, date, tags, text} = req.body;
    var doc = {author, title, desc, date, tags, text};
    var promise = Article.create(doc, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
};

// create new article via GET - for testing only
exports.article_create_get = function(req, res) {
    var {author, title, desc, date, tags, text} = req.query;
    var doc = {author, title, desc, date, tags, text};
    var promise = Article.create(doc, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
}

// update article via PATCH
exports.article_update = function(req, res) {
    
};

// Delete article via DELETE
// multiple remove methods, which one to support?
// deletemany may be needed for removing user and his posts from db
exports.article_delete = function(req, res) {
    
};

// Delete article via GET - for testing only
exports.article_delete_get = function(req, res) {

}

