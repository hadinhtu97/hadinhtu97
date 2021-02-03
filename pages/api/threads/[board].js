import Board from '../../../controllers/board'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    let board = new Board()
    try {
        await dbConnect()
        switch (req.method) {
            case 'GET':
                let threads = await board.findAllThreadAndLimit(req.query.board)
                res.json(threads)
                break
            case 'POST':
                if (req.body.text == undefined || req.body.delete_password == undefined) {
                    res.send('Required fields missing!')
                } else {
                    await board.createThread(req.query.board, req.body.text, req.body.delete_password)
                    res.send('success')
                }
                break
            case 'PUT':
                if (req.body.thread_id == undefined) {
                    res.send('Required thread_id !')
                } else {
                    let threadUpdated = await board.updateThread(req.query.board, req.body.thread_id)
                    threadUpdated == null ? res.send('Invalid id') : res.send('success')
                }
                break
            case 'DELETE':
                if (req.body.thread_id == undefined || req.body.delete_password == undefined) {
                    res.send('Required fields missing')
                } else {
                    let threadDeleted = await board.deleteThread(req.query.board, req.body.thread_id, req.body.delete_password)
                    threadDeleted == null ? res.send('fail') : res.send('success')
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