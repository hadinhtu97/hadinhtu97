'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    commentcount: Number,
    comments: [String]
})

export default mongoose.models.book || mongoose.model('book', bookSchema)