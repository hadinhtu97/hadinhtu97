import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: Number
})

export default mongoose.models.url || mongoose.model('url', urlSchema)