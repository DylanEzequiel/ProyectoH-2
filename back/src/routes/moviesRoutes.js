const express =require("express")
const moviesRoute =express.Router()
const {getMovies,postMovies}= require("../controllers/moviesController.js")


moviesRoute.get("/",getMovies);
moviesRoute.post("/", postMovies)

module.exports = moviesRoute 