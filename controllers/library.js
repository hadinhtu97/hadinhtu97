'use strict';

import BookModel from '../models/book'

function Library() {

    this.getAllBooks = async () => {
        return await BookModel.find({});
    }

    this.createBook = async (title) => {
        let book = new BookModel({
            title: title,
            commentcount: 0,
            comments: []
        });
        return await book.save();
    }

    this.createComment = async (_id, comment) => {
        return await BookModel.findByIdAndUpdate(_id,
            {
                $push: { comments: comment },
                $inc: { commentcount: 1 }
            },
            { new: true });
    }

    this.getBook = async (_id) => {
        return await BookModel.findById(_id);
    }

    this.deleteBook = async (_id) => {
        return await BookModel.findByIdAndDelete(_id);
    }

    this.deleteAllBooks = async () => {
        return await BookModel.deleteMany({});
    }

}

module.exports = Library;