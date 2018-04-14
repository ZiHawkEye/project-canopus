// this uses express which is not as low level as http module
// http://www.sqlitetutorial.net/sqlite-nodejs/connect/
// https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
// https://nodejs.org/en/docs/guides/getting-started-guide/

const express = require("express");
const fs = require("fs");
var MongoClient = require('mongodb').MongoClient;

const app = express();

app.set("port", process.env.PORT || 3001);

// define 404 and 500

//routes defined below
app.get("/api/card", (req, res) => {
    //find out how to send imgs as json? encoded
    // var img1 = fs.readFile('/client/src/assets/img1.jpg', (error) => {console.err(error)});
    // var img2 = fs.readFile('/client/src/assets/img2.jpg', (error) => {console.err(error)});
    // var img3 = fs.readFile('/client/src/assets/img3.jpg', (error) => {console.err(error)});

    res.json({cards: [  
        {img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr02/14/7/enhanced-3829-1400068353-2.jpg', title: "title1", topic: "topic1", desc: "desc1"},
        {img: 'http://budgetstockphoto.com/bamers/stock_photo_spectrum.jpg', title: "title2", topic: "topic2", desc: "desc2"},
        {img: 'https://ak.picdn.net/assets/cms/89a342bc2cb8831391f7feb79d0a8ed22265f892-stock-photo-lonely-boat-on-a-beach-with-aerial-view-280774472.jpg', title: "title3", topic: "topic3", desc: "desc3"}
    ]})
});

app.get("/api/post", (req, res) => {
    res.json({posts: [
        {
        text: '1Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
        },
        {
        text: '2Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
        },
        {
        text: '3Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
        }
    ]})
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
