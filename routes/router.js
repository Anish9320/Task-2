const express = require("express")
const { HandleFiles } = require("../controllers/FileHandler")

const Router = express.Router()

Router.post("/upload",HandleFiles)

module.exports = { Router }