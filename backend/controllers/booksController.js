import {Book} from '../models/book.models.js';

// Create a new book
const createBook = async (req, res) => {
  const {title, author, publishedYear, price} = req.body;
  if(!title || !author || !publishedYear || !price){
    return res.status(400).json({success: false, message: 'Please fill all the fields'});
  }
  const newBook = new Book({title, author, publishedYear, price});
  try{
    await newBook.save();
    res.status(201).json({success: true, data: newBook});
  }catch(error){
    console.log(error);
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }
}


// Get all books

const getAllBooks = async (req, res) =>{
  try{
    const books = await Book.find();
    res.status(200).send(books);

  }catch(error){
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
  // res.status(200).send('Let\'s get started');
}

// Get a single book
const getBook = async (req, res) => {
  const id = req.params.id;

  try{
    const book = await Book.findById(id);
    if(!book){
      return res.status(404).json({success: false, message: 'Book not found'});
    }
    res.status(200).json({success: true, data: book});
  }catch(error){
    console.log(error);
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }}


// Update a book
const updateBook = async (req, res) => {
  const id = req.params.id;
  const {title, author, publishedYear, price} = req.body;

  if(!title || !author || !publishedYear || !price){
    return res.status(400).json({success: false, message: 'Please fill all the fields'});
  }

  try{
    const book = await Book.findByIdAndUpdate(id, {title, author, publishedYear, price}, {new: true});
    if(!book){
      return res.status(404).json({success: false, message: 'Book not found'});
    }
    res.status(200).json({success: true, data: book});
  }catch(error){
    console.log(error);
    res.status(500).json({success: false, message: 'Internal Server Error'});
}
}
// Delete a book

const deleteBook = async (req, res) => {
  const id = req.params.id;

  try{
    const book = await Book.findByIdAndDelete(id);
    if(!book){
      return res.status(404).json({success: false, message: 'Book not found'});
    }
    res.status(200).json({success: true, message: 'Book deleted successfully'});
  }catch(error){
    console.log(error);
    res.status(500).json({success: false, message: 'Internal Server Error'});

  }
}

export {createBook, getAllBooks, getBook, updateBook, deleteBook};