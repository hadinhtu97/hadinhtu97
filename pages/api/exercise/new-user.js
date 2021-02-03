import dbConnect from '../../../ultils/dbConnect'
import UserExseciseModel from '../../../models/userExercise'

export default async (req, res) => {
    switch (req.method) {
        case 'POST':
            if (req.body.username == undefined) {
                res.json('Require username!')
                break
            }
            await dbConnect()
            try {
                let user = await UserExseciseModel.findOne({ username: req.body.username })
                if (user != null) {
                    res.json('Username already taken')
                    break
                } else {
                    let newUser = new UserExseciseModel({
                        username: req.body.username
                    })
                    try {
                        let doc = await newUser.save()
                        res.json(doc)
                    } catch (e) {
                        res.status(404).end()
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