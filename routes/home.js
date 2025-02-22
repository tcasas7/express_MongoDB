const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrl,
  editarUrlForm,
  redireccionamiento,
} = require("../controllers/homeController");
const { nanoid } = require("nanoid");
const urlValidar = require("../middlewares/urlValidar");
const router = express.Router();

router.get("/", leerUrls);
router.post("/", urlValidar, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.post("/editar/:id", urlValidar, editarUrl);
router.get("/editar/:id", editarUrlForm);

router.get("/shortURL", redireccionamiento);

module.exports = router;