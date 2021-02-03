import Convert from '../../../controllers/convert'

export default (req, res) => {
    let convert = new Convert();
    switch (req.method) {
        case 'GET':
            let input = req.query.input;
            if (input === undefined) {
                res.send("Can't not find 'input' value!");
            } else {
                let initNum = convert.getInitNum(input);
                let initUnit = convert.getInitUnit(input);
                if (initNum == false && initUnit == false) {
                    res.send('invalid number and unit')
                } else if (initNum == false) {
                    res.send('invalid number');
                } else if (initUnit == false) {
                    res.send('invalid unit')
                } else {
                    res.json({
                        initNum: initNum,
                        initUnit: initUnit,
                        returnNum: convert.getReturnNum(initNum, initUnit),
                        returnUnit: convert.getReturnUnit(initNum, initUnit),
                        string: convert.getReturnString(initNum, initUnit)
                    })
                }
            }
            break
        default:
            res.status(404).end()
    }
}