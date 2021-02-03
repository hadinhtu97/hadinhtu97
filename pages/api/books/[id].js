import LibraryController from '../../../controllers/library'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    let library = new LibraryController()
    try {
        switch (req.method) {
            case 'GET':
                let book = await library.getBook(req.query.id)
                book == null ? res.send('no book exists') : res.json(book)
                break
            case 'POST':
                if (req.body.comment == undefined) {
                    res.send('missing required field comment')
                } else {
                    let bookUpdated = await library.createComment(req.query.id, req.body.comment)
                    bookUpdated == null ? res.send('no book exists') : res.json(bookUpdated)
                }
                break
            case 'DELETE':
                let bookDeleted = await library.deleteBook(req.query.id)
                bookDeleted == null ? res.send('no book exists') : res.send('delete successful')
                break
            default:
                res.status(404).end()
                break
        }
    } catch (e) {
        res.send('DB error')
    }
}