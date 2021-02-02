import { convertDate } from './index'

export default (req, res) => {
    res.json(convertDate(req.query.time))
}