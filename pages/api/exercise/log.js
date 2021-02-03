import UserExerciseModel from '../../../models/userExercise'
import ExerciseModel from '../../../models/exercise'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case 'GET':
            try {
                if (req.query.userId == undefined) {
                    res.send('Require userId!')
                } else {
                    let user = await UserExerciseModel.findById(req.query.userId)
                    if (user == null) {
                        res.send('Cannot find user with id: ' + req.query.userId)
                    } else {
                        let limit = req.query.limit == undefined ? false : parseInt(req.query.limit)
                        let exercises = await ExerciseModel.find({ userId: req.query.userId }).limit(limit).exec()
                        if (req.query.from == undefined || req.query.to == undefined) {
                            let listEx = [];
                            if (exercises.length != 0) {
                                exercises.forEach(ex => {
                                    listEx.push({
                                        description: ex.description,
                                        duration: ex.duration,
                                        date: convertDate(ex.date.toUTCString())
                                    })
                                })
                            }
                            res.json({
                                _id: user._id,
                                username: user.username,
                                count: listEx.length,
                                log: listEx
                            })
                        } else {
                            let fromDate = new Date(req.query.from);
                            let toDate = new Date(req.query.to);
                            let listEx = [];
                            if (exercises != 0) {
                                exercises.filter(ex => new Date(ex.date) > fromDate && new Date(ex.date) < toDate).forEach(ex => {
                                    listEx.push({
                                        description: ex.description,
                                        duration: ex.duration,
                                        date: convertDate(ex.date.toUTCString())
                                    })
                                })
                            }
                            res.json({
                                _id: user._id,
                                username: user.username,
                                from: convertDate(fromDate.toUTCString()),
                                to: convertDate(toDate.toUTCString()),
                                count: listEx.length,
                                log: listEx
                            })
                        }
                    }
                }
            } catch (e) {
                res.status(404).end()
            }
            break
        default:
            res.status(404).end()
            break
    }
}

let convertDate = (dateString) => {
    dateString = dateString.slice(0, dateString.length - 13);
    dateString = dateString.split(",").join('');
    dateString = dateString.replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)/, "$1 $3 $2 $4")
    return dateString;
}