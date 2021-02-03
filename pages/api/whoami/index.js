export default (req, res) => {
    if (req.method == 'GET') {
        res.json({
            ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            language: req.headers["accept-language"],
            software: req.headers["user-agent"]
        })
    } else {
        res.status(404).send('')
    }
}