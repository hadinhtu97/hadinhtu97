import mongoose from 'mongoose'

const issueSchema = new mongoose.Schema({
    project: String,
    issue_title: String,
    issue_text: String,
    created_on: String,
    updated_on: String,
    created_by: String,
    assigned_to: String,
    open: Boolean,
    status_text: String
})

export default mongoose.models.issue || mongoose.model('issue', issueSchema)