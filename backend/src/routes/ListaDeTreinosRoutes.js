const express = require("express");
const router = express.Router();

const ListaDeTreinosController = require("../controller/ListaDeTreinosController");
const ListaDeTreinosValidation = require("../middlewares/ListaDeTreinosValidation");
const MacaddressValidation = require("../middlewares/MacaddressValidation");

router.post("/", ListaDeTreinosValidation, ListaDeTreinosController.create);
router.put("/:id", ListaDeTreinosValidation, ListaDeTreinosController.update);
router.put("/:id/:done", ListaDeTreinosController.done);
router.get("/:id", ListaDeTreinosController.show);
router.delete("/:id", ListaDeTreinosController.delete);
router.get("/filter/all", MacaddressValidation, ListaDeTreinosController.all);

module.exports = router;
