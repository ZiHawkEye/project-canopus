// import { globalAgent } from "https";
// import { mongo } from "mongoose";
// import { createHook } from "async_hooks";

// this uses express which is not as low level as http module
// http://www.sqlitetutorial.net/sqlite-nodejs/connect/
// https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
// https://nodejs.org/en/docs/guides/getting-started-guide/

const express = require("express");
const fs = require("fs");
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

// example code
// var Schema = mongoose.Schema;
// // creates and defines new schema
// var SomeModelSchema = new Schema({
//     name: String,
// });

// // Compile model from schema - a collection of records
// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// // creates model instance (ie. record)
// var instance = new SomeModel({ name: 'chok' });
// instance.save(err => {
//     if (err) return handleError(err);
// })

// console.log(instance.name);

// //not sure how to bind this to a variable
// // SomeModel.create({ name: 'chok' }, (err, instance) => {
// //     if (err) return handleError(err);
// //     console.log(instance.name + "model created");
// // })

var articleSchema = new mongoose.Schema({
    author: String,
    title: String,
    desc: String,
    text: String
})

var articlelib = mongoose.model('articlelib', articleSchema);

// var article = new articlelib({
//     author: 'Wikipedia',
//     title:,
//     desc:,
//     text:,
// })

let seedData = [
    {author: "1author", title: "1title", desc: "1desc", text: "1text"},
    {author: "2author", title: "2title", desc: "2desc", text: "2text"},
    {author: "3author", title: "3title", desc: "3desc", text: "3text"},
    {author: "4author", title: "4title", desc: "4desc", text: "4text"},
    {author: "5author", title: "5title", desc: "5desc", text: "5text"},
    {author: "6author", title: "6title", desc: "6desc", text: "6text"}
]

seedData.map(post => {
    articlelib.create({ author: post.author, title: post.title, desc: post.desc, text: post.text }, (err, articleinstance) => {
        if (err) handleError(err);
        //saved
    })
})

// express functionality defined below
const app = express();

app.set("port", process.env.PORT || 3001);

// define 404 and 500

//routes defined below
app.get("/api/card", (req, res) => {
    //find out how to send imgs as json? encoded
    // var img1 = fs.readFile('/client/src/assets/img1.jpg', (error) => {console.err(error)});
    // var img2 = fs.readFile('/client/src/assets/img2.jpg', (error) => {console.err(error)});
    // var img3 = fs.readFile('/client/src/assets/img3.jpg', (error) => {console.err(error)});

    res.json(instance);
});

app.post("/admin/create", (req, res) => {
    const { author, title, desc, text } = req.body;
    articlelib.create({ author, title, desc, text });
    res.send("success");
})

app.get("/api/search", (req, res) => {
    articlelib.find({title: req.query.q}, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/api/post", (req, res) => {
    res.json({
        posts: [
            {
                text: '1Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
            },
            {
                text: '2Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
            },
            {
                text: '3Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
            }
        ]
    })
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
