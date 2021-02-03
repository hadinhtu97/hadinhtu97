import { convertDate } from './index'

export default (req, res) => {
    req.method == 'GET' ? res.json(convertDate(req.query.time)) : res.status(404).send('')
}