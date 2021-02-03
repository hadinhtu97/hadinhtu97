import mongoose from 'mongoose'

const userExerciseSchema = new mongoose.Schema({
    username: String
})

export default mongoose.models.userexercise || mongoose.model('userexercise', userExerciseSchema)