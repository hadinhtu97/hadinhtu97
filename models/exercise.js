import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema({
    userId: String,
    description: String,
    duration: Number,
    date: Date
})

export default mongoose.models.exercise || mongoose.model('exercise', exerciseSchema)