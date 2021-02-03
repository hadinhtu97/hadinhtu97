import IssueModel from '../models/issue'

function Issue() {

    this.getIssueByProject = async (project, created_by, assigned_to, open) => {
        return await IssueModel.find({
            project: project,
            created_by: created_by == undefined ? { $exists: true } : created_by,
            assigned_to: assigned_to == undefined ? { $exists: true } : assigned_to,
            open: open == undefined ? { $exists: true } : open
        });
    }

    this.createIssue = async (project, issue_title, issue_text, created_by, assigned_to, status_text) => {
        let issue = new IssueModel({
            project: project,
            issue_title: issue_title,
            issue_text: issue_text,
            created_on: new Date().toISOString(),
            updated_on: new Date().toISOString(),
            created_by: created_by,
            assigned_to: assigned_to == undefined ? '' : assigned_to,
            open: true,
            status_text: status_text == undefined ? '' : status_text
        });
        return await issue.save();
    }

    this.updateIssue = async (_id, issue_title, issue_text, created_by, assigned_to, open, status_text) => {
        return await IssueModel.findByIdAndUpdate(_id,
            {
                issue_title: issue_title,
                issue_text: issue_text,
                created_by: created_by,
                assigned_to: assigned_to,
                open: open == undefined ? undefined : Boolean(open),
                status_text: status_text,
                updated_on: new Date().toISOString()
            },
            { new: true, omitUndefined: true })
    }

    this.deleteIssue = async (_id) => {
        return await IssueModel.findByIdAndDelete(_id);
    }
}

module.exports = Issue;