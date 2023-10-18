import * as BookController from "../modules/books/book.controller.js";
import express from "express";

const router = express.Router();

router.post("/books", BookController.addBookHandler);
router.get("/books", BookController.getBooksHandler);
router.get("/books/:bookId", BookController.getBookByIdHandler);
router.put("/books/:bookId", BookController.updateBookHandler);
router.delete("/books/:bookId", BookController.deleteBookHandler);

export default router;
