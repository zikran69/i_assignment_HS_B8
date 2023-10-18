import * as bookRepository from "./book.repository.js";

const getAllBooks = async () => {
  return bookRepository.getAllBooks();
};

const getBookById = async (bookId) => {
  return bookRepository.getBookById(bookId);
};

const addBook = async (newBookData) => {
  console.log("Adding book with data:", newBookData);
  return bookRepository.createBook(newBookData);
};

const updateBook = async (bookId, updatedBookData) => {
  return bookRepository.updateBook(bookId, updatedBookData);
};

const deleteBook = async (bookId) => {
  return bookRepository.deleteBook(bookId);
};

export { getAllBooks, getBookById, addBook, updateBook, deleteBook };
