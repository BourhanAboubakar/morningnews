const mongoose = require('mongoose')
const wishlistSchema = mongoose.Schema({
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    content: String,
    country: String, 
})
const wishlistModel = mongoose.model('wishlist', wishlistSchema);

module.exports = wishlistModel;