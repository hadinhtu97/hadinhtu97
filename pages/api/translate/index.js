import Translate from '../../../controllers/translate'

export default (req, res) => {
    let translate = new Translate()
    switch (req.method) {
        case 'POST':
            if (req.body.text == undefined || req.body.locale == undefined) {
                res.json({ error: 'Required field(s) missing' });
            } else if (req.body.text == '') {
                res.json({ error: 'No text to translate' });
            } else if (!translate.isValidLocate(req.body.locale)) {
                res.json({ error: 'Invalid value for locale field' });
            } else if (!translate.isNeedToTranslate(req.body.text, req.body.locale)) {
                res.json({ text: req.body.text, translation: 'Everything looks good to me!' });
            } else {
                res.json({ text: req.body.text, translation: translate.translate(req.body.text, req.body.locale) });
            }
            break
        default:
            res.status(404).end()
            break
    }
}