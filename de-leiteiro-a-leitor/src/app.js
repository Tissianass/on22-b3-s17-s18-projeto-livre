require("dotenv").config()
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors

const mongoose = require("./database/dbConnect"); //conecto com o database
const booksRoutes = require("./routes/booksRoutes"); // conecto as rotas
const kidsRoutes = require("./routes/kidsRoutes"); // conecto as rotas

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();


app.use("/library/books", booksRoutes); // crio uma rota raiz
app.use("/library/kids", kidsRoutes); // crio uma rota raiz

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
// exportando para usar o server.js
module.exports = app;