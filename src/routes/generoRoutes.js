const express = require("express")
const router = express.Router()

const GeneroController = require("../controllers/generoController")

router.get("/", GeneroController.getAllGeneros)
router.post("/", GeneroController.createGenero)

module.exports = router