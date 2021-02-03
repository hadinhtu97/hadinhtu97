
export default (req, res) => {
    req.method == 'GET' ? res.json(convertDate(new Date())) : res.status(404).send('')
}

export { convertDate }

const convertDate = (date) => {
    if (date === undefined) {
        return {
            unix: new Date().getTime(),
            utc: new Date().toUTCString()
        }
    } else {
        if (/\d{5,}/.test(date)) {
            return {
                unix: parseInt(date),
                utc: new Date(parseInt(date)).toUTCString()
            }
        } else {
            let dateObj = new Date(date);
            if (dateObj.toString() == "Invalid Date") {
                return {
                    error: "Invalid Date"
                }
            } else {
                return {
                    unix: dateObj.valueOf(),
                    utc: dateObj.toUTCString()
                }
            }
        }
    }
}

