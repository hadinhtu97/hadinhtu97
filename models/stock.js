'use strict';

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: String,
    like_count: Number,
    ip: [String]
});

export default mongoose.models.stock || mongoose.model('stock', stockSchema)