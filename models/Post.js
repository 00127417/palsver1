var mongoose = require('mongoose');

let Post = new mongoose.Schema({
    post: String,
});

module.exports = mongoose.model('post', Post);