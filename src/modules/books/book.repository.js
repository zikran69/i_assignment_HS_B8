import prisma from "../../db/index.js";

const getAllBooks = async () => {
  return prisma.book.findMany();
};

const getBookById = async (bookId) => {
  return prisma.book.findUnique({
    where: {
      id: parseInt(bookId),
    },
  });
};

const createBook = async (newBookData) => {
  return prisma.book.create({
    data: newBookData,
  });
};

const updateBook = async (bookId, updatedBookData) => {
  return prisma.book.update({
    where: {
      id: bookId,
    },
    data: updatedBookData,
  });
};

const deleteBook = async (bookId) => {
  return prisma.book.delete({
    where: {
      id: bookId,
    },
  });
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
