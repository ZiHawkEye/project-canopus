const mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    author: {type: String, default: "Placeholder title", max: 100 },
    title: {type: String, default: "Placeholder title", max: 200 },
    desc: {type: String, default: "Placeholder description", max: 600 },
    date: {type: Date, default: Date.now },
    tags: {type: Array, lowercase: true },
    text: {type: String, default: "Placeholder text"}
})

// export function to create model class
module.exports = mongoose.model('Article', ArticleSchema);