import dbConnect from '../../../ultils/dbConnect'
import UserExerciseModel from '../../../models/userExercise'

export default async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case 'GET':
            try {
                let allUser = await UserExerciseModel.find({})
                res.json(allUser)
            } catch (e) {
                res.status(404).end()
            }
            break
        default:
            res.status(404).end()
            break
    }
}