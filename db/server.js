const express = require('express');
const mongoose = require('mongoose');


//database functionality defined below
// database url
let uri = "mongodb://ding:dong@ds243008.mlab.com:43008/canoopuss";
// connects to database
mongoose.connect(uri);
// get mongo to use global promise lib
mongoose.Promise = global.Promise;
// get default connection
const db = mongoose.connection;
// gets notif of connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// express functionality defined below
// router is only used for router modules(since you are using http methods) but for server you use app?
const app = express();

app.set("port", process.env.PORT || 3001);

// imports route modules
// remember to serve the static react app eventually on each route (except /api)
// accessed by user
var index = require('./routes/index');
// should only be accessed via fetch api
var api = require('./routes/api');

// which should come first?
app.use('/', index);
app.use('/api', api);

//404
app.use(function (req, res, next) {
    res.status(404).send("Not here!");
  })

//500(error handling)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Congratulations! You fucked up =)");
  })

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});


