const controller = require("../controllers/kidsController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/kids/all", controller.getAllKids);
router.get("/kids/:name", controller.getKidsByName);
router.post("/kids/new", controller.addNewKids);
router.patch("/kids/:name", controller.updateKidsByName);
router.delete("/kids/:name", controller.deleteKids);

module.exports = router; //exporto as rotas