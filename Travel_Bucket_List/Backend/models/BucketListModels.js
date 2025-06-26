const mongoose = require('mongoose');
const bucketListSchema = new mongoose.Schema({
    place: String,
    visited: { type: Boolean, default: false },
    notes: String,
    image: String, // URL or path to image
    images: { type: [String], default: [] }
});
module.exports = mongoose.model('BucketList', bucketListSchema);