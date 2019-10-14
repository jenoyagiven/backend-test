var express = require("express")
var router = express.Router()
// memakai destructure {} - untuk mengkecilkan kode
const {addMovie, getMovie, editMovie, deleteMovie} = require("../1.controller/authcontroller")
const {addCategories, editCategories, deleteCategories} = require("../1.controller/authcontroller")

// movie
router.get("/getMovie", getMovie)
router.post("/addMovie", addMovie)
router.patch("/EditMovie", editMovie)
router.delete("/deleteMovie", deleteMovie)

// categories
router.post("/addCategories", addCategories)
router.patch("/EditCategories", editCategories)
router.delete("/deleteCategories", deleteCategories)

module.exports = router