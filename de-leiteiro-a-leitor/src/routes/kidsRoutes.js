const controller = require("../controllers/kidsController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/kids/all", controller.getAllKids);
router.get("/kids/:id", controller.getKidsById);
router.post("/kids/new", controller.addNewKids);
router.patch("/patch/:id", controller.updateKidsById);
router.delete("/kids/:id", controller.deleteKids);

module.exports = router; //exporto as rotas