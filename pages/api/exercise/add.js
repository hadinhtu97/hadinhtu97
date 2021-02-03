import UserExerciseModel from '../../../models/userExercise'
import ExerciseModel from '../../../models/exercise'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case 'POST':
            if (req.body.userId == undefined || req.body.description == undefined || req.body.duration == undefined || req.body.date == undefined) {
                res.send('Require fields missing!');
            } else {
                try {
                    let user = await UserExerciseModel.findById(req.body.userId);
                    if (user == null) {
                        res.json('Cannot find user with id: ' + req.body.userId)
                    } else {
                        let exercise = new ExerciseModel({
                            userId: req.body.userId,
                            description: req.body.description,
                            duration: req.body.duration,
                            date: req.body.date == '' ? new Date().toUTCString() : new Date(req.body.date).toUTCString()
                        })
                        let doc = await exercise.save();
                        res.json(doc);
                        res.status(404).end()
                    }
                } catch (e) {
                    res.status(404).end()
                }
            }
            break
        default:
            res.status(404).end()
            break
    }
}