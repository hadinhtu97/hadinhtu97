import Board from '../../../controllers/board'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    let board = new Board()
    try {
        await dbConnect()
        switch (req.method) {
            case 'GET':
                if (req.query.thread_id == undefined) {
                    res.send('required thread id')
                } else {
                    let thread = await board.findThreadAndLimit(req.query.board, req.query.thread_id)
                    thread == null ? res.send('invalid id') : res.json(thread)
                }
                break
            case 'POST':
                if (req.body.text == undefined || req.body.delete_password == undefined || req.body.thread_id == undefined) {
                    res.send('Required fields missing!')
                } else {
                    let thread = await board.createReply(req.query.board, req.body.thread_id, req.body.text, req.body.delete_password)
                    thread == null ? res.send('invalid id') : res.json('success')
                }
                break
            case 'PUT':
                if (req.body.thread_id == undefined || req.body.reply_id == undefined) {
                    res.send('Required fields missing !')
                } else {
                    let threadUpdated = await board.updateReply(req.query.board, req.body.thread_id, req.body.reply_id)
                    threadUpdated == null ? res.send('Invalid id') : res.send('success')
                }
                break
            case 'DELETE':
                if (req.body.thread_id == undefined || req.body.delete_password == undefined || req.body.reply_id == undefined) {
                    res.send('Required fields missing')
                } else {
                    let threadUpdated = await board.deleteReply(req.query.board, req.body.thread_id,req.body.reply_id, req.body.delete_password)
                    threadUpdated == null ? res.send('fail') : res.send('success')
                }
                break
            default:
                res.status(404).end()
                break
        }
    } catch (e) {
        console.log(e)
        res.send('DB error')
    }
}