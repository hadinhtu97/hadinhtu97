import IssueController from '../../../controllers/issue'
import dbConnect from '../../../ultils/dbConnect'

export default async (req, res) => {
    let issueController = new IssueController()
    try {
        await dbConnect()
        switch (req.method) {
            case 'GET':
                let issues = await issueController.getIssueByProject(req.query.project, req.query.created_by, req.query.assigned_to, req.query.open)
                res.json(issues)
                break
            case 'POST':
                if (req.body.created_by == undefined || req.body.issue_title == undefined || req.body.issue_text == undefined) {
                    res.json({ error: 'required field(s) missing' })
                } else {
                    let newIssue = await issueController.createIssue(req.query.project, req.body.issue_title, req.body.issue_text, req.body.created_by, req.body.assigned_to, req.body.status_text)
                    res.json(newIssue)
                }
                break
            case 'PUT':
                if (req.body._id == undefined) {
                    res.json({ error: 'missing _id' })
                } else if (req.body.issue_title == undefined && req.body.issue_text == undefined && req.body.created_by == undefined && req.body.assigned_to == undefined && req.body.open == undefined && req.body.status_text == undefined) {
                    res.json({ error: 'no update field(s) sent', '_id': req.body._id })
                } else {
                    let issueUpdated = await issueController.updateIssue(req.body._id, req.body.issue_title, req.body.issue_text, req.body.created_by, req.body.assigned_to, req.body.open, req.body.status_text)
                    issueUpdated == null ? res.json({ error: 'could not update', '_id': req.body._id }) : res.json({ result: 'successfully updated', '_id': req.body._id })
                }
                break
            case 'DELETE':
                if (req.body._id == undefined) {
                    res.json({ error: 'missing _id' });
                } else {
                    let issueDeleted = await issueController.deleteIssue(req.body._id)
                    issueDeleted == null ? res.json({ error: 'could not delete', '_id': req.body._id }) : res.json({ result: 'successfully deleted', '_id': req.body._id })
                }
                break
            default:
                res.status(404).end()
                break
        }
    } catch (e) {
        res.send('DB error!')
    }

}