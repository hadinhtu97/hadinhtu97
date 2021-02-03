'use strict';

import mongoose from 'mongoose'

const threadSchema = new mongoose.Schema({
    board: String,
    text: String,
    created_on: Date,
    bumped_on: Date,
    reported: Boolean,
    delete_password: String,
    replies: [
        {
            text: String,
            created_on: Date,
            reported: Boolean,
            delete_password: String
        }
    ]
});

export default mongoose.models.thread || mongoose.model('thread', threadSchema)