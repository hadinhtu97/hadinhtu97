import LibraryController from '../../../controllers/library'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    let library = new LibraryController()
    try {
        await dbConnect
        switch (req.method) {
            case 'GET':
                let books = await library.getAllBooks()
                res.json(books)
                break
            case 'POST':
                if (req.body.title == undefined) {
                    res.send('missing required filed title')
                } else {
                    let newBook = await library.createBook(req.body.title)
                    res.json(newBook)
                }
                break
            case 'DELETE':
                await library.deleteAllBooks()
                res.send('complete delete successful')
                break
            default:
                res.status(404).end()
                break
        }
    } catch (e) {
        res.send('DB error!')
    }
}