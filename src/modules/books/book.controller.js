import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "./book.service.js";

const getAllBooksHandler = async (req, res) => {
  try {
    const books = await getAllBooks();
    return res.status(200).send({
      status: "success",
      data: {
        books,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const getBookByIdHandler = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await getBookById(bookId);

    if (book) {
      return res.status(200).send({
        status: "success",
        data: {
          book,
        },
      });
    } else {
      return res.status(404).send({
        status: "fail",
        message: "Book not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const addBookHandler = async (req, res) => {
  const newBookData = req.body;
  console.log("Data received:", newBookData);
  try {
    const addedBook = await addBook({
      title: newBookData.title,
      author: newBookData.author,
      published: newBookData.published,
    });

    console.log("Book added:", addedBook.dataValues);

    return res.status(201).send({
      status: "success",
      data: {
        bookId: addedBook.id,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const updateBookHandler = async (req, res) => {
  const { bookId } = req.params;
  const updatedBookData = req.body;
  try {
    const updatedBook = await updateBook(Number(bookId), updatedBookData);
    if (updatedBook) {
      return res.status(200).send({
        status: "success",
        message: "Book updated successfully",
      });
    } else {
      return res.status(404).send({
        status: "fail",
        message: "Book not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const deleteBookHandler = async (req, res) => {
  const { bookId } = req.params;
  try {
    const id = parseInt(bookId, 10);
    const deletedBook = await deleteBook(id);

    if (deletedBook) {
      return res.status(200).send({
        status: "success",
        message: "Book deleted successfully",
      });
    } else {
      return res.status(404).send({
        status: "fail",
        message: "Book not found",
      });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const getBooksHandler = async (req, res) => {
  try {
    const books = await getAllBooks();
    return res.status(200).send({
      status: "success",
      data: {
        books,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

export {
  getAllBooksHandler,
  getBookByIdHandler,
  addBookHandler,
  updateBookHandler,
  deleteBookHandler,
  getBooksHandler,
};
