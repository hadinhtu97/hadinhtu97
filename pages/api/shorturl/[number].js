import dbConnect from '../../../ultils/dbConnect'
import Url from '../../../models/url'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await dbConnect()
            if (/\D/g.test(req.query.number)) {
                return res.json({ error: "Wrong format" });
            } else {
                try {
                    let result = await Url.findOne({ short_url: req.query.number })
                    result == null ? res.json({ error: "No short URL found for the given input" }) : res.redirect(result.original_url)
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