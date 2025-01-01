import express from 'express';
const router = express.Router();
import {createBook, getAllBooks, getBook, updateBook, deleteBook} from '../controllers/booksController.js';

// Get all books
router.get('', getAllBooks)

// Get a single book
router.get('/:id', getBook)

// Create a new book
router.post('', createBook)

// Update a book
router.put('/:id', updateBook)

// Delete a book
router.delete('/:id', deleteBook)

export default router;