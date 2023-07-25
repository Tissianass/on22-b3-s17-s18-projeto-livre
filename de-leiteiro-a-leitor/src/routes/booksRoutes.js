const controller = require("../controllers/booksController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/books", controller.getAllBooks);
router.get("/books/:id", controller.getBookById);
router.post("/books/new", controller.addNewBook);
router.patch("/books/:id", controller.updateBookById);
router.delete("/books/:id", controller.deleteBook);

module.exports = router; //exporto as rotas