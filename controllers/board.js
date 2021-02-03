'use strict';

import ThreadModel from '../models/thread'
import bcrypt from 'bcrypt'

function Board() {

    this.createThread = async (board, text, deletePassword) => {
        let thread = new ThreadModel({
            board: board,
            text: text,
            created_on: new Date().toUTCString(),
            bumped_on: new Date().toUTCString(),
            reported: false,
            delete_password: bcrypt.hashSync(deletePassword, 12),
            replies: []
        });
        return await thread.save();
    }

    this.createReply = async (board, thread_id, text, deletePassword) => {
        return await ThreadModel.findOneAndUpdate(
            {
                _id: thread_id,
                board: board
            },
            {
                // push a new reply to replies AND SORT replies desc by created_on
                $push: {
                    replies: {
                        $each: [
                            {
                                text: text,
                                created_on: new Date().toUTCString(),
                                reported: false,
                                delete_password: bcrypt.hashSync(deletePassword, 12)
                            }
                        ],
                        $sort: {
                            created_on: -1
                        }
                    }
                },
                bumped_on: new Date().toUTCString()
            },
            {
                new: true
            }
        )
    }

    this.findAllThreadAndLimit = async (board) => {
        return await ThreadModel.find(
            {
                board: board
            })
            //most recent 10 bumped threads on the board
            .sort({
                bumped_on: -1,
            })
            .limit(10)
            .select({
                replies: {
                    reported: 0,
                    delete_password: 0
                },
                board: 0,
                reported: 0,
                delete_password: 0,
                __v: 0
            })
            .exec()
    }

    this.findThreadAndLimit = async (board, thread_id) => {
        return await ThreadModel.findOne(
            {
                _id: thread_id,
                board: board
            })
            .select({
                replies: {
                    reported: 0,
                    delete_password: 0
                },
                board: 0,
                reported: 0,
                delete_password: 0,
                __v: 0
            })
            .exec()
    }

    this.deleteThread = async (board, thread_id, delete_password) => {
        let thread = await ThreadModel.findOne({ _id: thread_id, board: board })
        if (thread == null) return null
        if (!bcrypt.compareSync(delete_password, thread.delete_password)) return null
        return await ThreadModel.findOneAndDelete({ _id: thread_id, board: board })
    }

    this.deleteReply = async (board, thread_id, reply_id, delete_password) => {
        let thread = await ThreadModel.findOne({
            _id: thread_id,
            board: board,
            replies: {
                $elemMatch: {
                    _id: reply_id
                }
            }
        })
        if (thread == null) return null
        if (!bcrypt.compareSync(delete_password, thread.delete_password)) return null
        return await ThreadModel.findOneAndUpdate(
            {
                _id: thread_id,
                board: board,
                replies: {
                    $elemMatch: {
                        _id: reply_id
                    }
                }
            },
            {
                $set: {
                    'replies.$.text': '[deleted]'
                }
            })
    }

    this.updateThread = async (board, thread_id) => {
        return await ThreadModel.findOneAndUpdate(
            {
                _id: thread_id,
                board: board
            },
            {
                reported: true
            },
            {
                new: true
            }
        )
    }

    this.updateReply = async (board, thread_id, reply_id) => {
        return await ThreadModel.findOneAndUpdate(
            {
                _id: thread_id,
                board: board,
                replies: {
                    $elemMatch: {
                        _id: reply_id
                    }
                }
            },
            {
                $set: {
                    'replies.$.reported': true
                }
            },
            {
                new: true
            }
        )
    }

}

export default Board