import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }

},
{
  timestamps: true,

});

export const Book = mongoose.model('Book', bookSchema);
