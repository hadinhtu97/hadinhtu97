import dbConnect from '../../../ultils/dbConnect'
import urlModel from '../../../models/url'
import dns from 'dns'

export default async (req, res) => {
    if (req.method == 'POST') {
        await dbConnect()
        let url = req.body.url;
        let httpRegex = /^https:\/\//;
        if (httpRegex.test(url)) {
            let rest = url.replace(httpRegex, '');
            if (rest === '') {
                return res.json({ error: 'invalid url' });
            } else {
                let regex = /\/\w+/g;
                rest = rest.replace(regex, '');
                dns.lookup(rest, (err) => {
                    if (err) {
                        return res.json({ error: 'invalid url' });
                    } else {
                        urlModel.findOne({ original_url: url }, (err, doc) => {
                            if (err) return res.send('Db error');
                            if (doc != null) {
                                return res.json(doc)
                            } else {
                                urlModel.find({}, (err, docs) => {
                                    if (err) return res.send('Db error')
                                    let newUrl = new urlModel({
                                        original_url: url,
                                        short_url: docs.length + 1
                                    })
                                    newUrl.save((err, url) => {
                                        if (err) return res.send('Db error')
                                        res.json(url)
                                    })
                                })
                            }
                        })
                    }
                })
            }
        } else {
            return res.status(404).end()
        }
    } else {
        return res.status(404).end()
    }
}