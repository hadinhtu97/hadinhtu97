export default (req, res) => {
    res.json({
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    })
}