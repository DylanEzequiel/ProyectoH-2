const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const moviesRoute = require("./routes/moviesRoutes.js")

const app = express()

app.use("/",morgan("dev"))
app.use(express.json())
app.use(cors())


app.use("/movies",moviesRoute)

module.exports= app