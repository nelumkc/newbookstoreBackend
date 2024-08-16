const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  //title: { type: String, required: true },
  //author: { type: String, required: true },
 //description: { type: String},
 bookTitle: { type: String, required: true },
 bookAuthor: { type: String, required: true },
  description: { type: String},
});

const Book = mongoose.model('300365641-Chandramini', bookSchema);
module.exports = Book;