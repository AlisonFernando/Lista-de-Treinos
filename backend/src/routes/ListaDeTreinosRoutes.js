const express = require("express");
const router = express.Router();

const ListaDeTreinosController = require("../controller/ListaDeTreinosController");
const ListaDeTreinosValidation = require("../middlewares/ListaDeTreinosValidation");
const MacaddressValidation = require("../middlewares/MacaddressValidation");

router.post("/", ListaDeTreinosValidation, ListaDeTreinosController.create);
router.put("/:id", ListaDeTreinosValidation, ListaDeTreinosController.update);
router.get("/:id", ListaDeTreinosController.show);
router.delete("/:id", ListaDeTreinosController.delete);
router.put("/:id/:done", ListaDeTreinosController.done);

router.get("/filter/all", MacaddressValidation, ListaDeTreinosController.all);
router.get("/filter/late", MacaddressValidation, ListaDeTreinosController.late);
router.get("/filter/today", MacaddressValidation, ListaDeTreinosController.today);
router.get("/filter/month", MacaddressValidation, ListaDeTreinosController.month);
router.get("/filter/year", MacaddressValidation, ListaDeTreinosController.year);

module.exports = router;
