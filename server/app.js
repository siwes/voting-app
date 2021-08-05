const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const app = express()

app.use(cors())
app.use(express.json())

// ping
app.get("/", (_, res) => {
    res.json({msg: "Welcome to voting-app API"})
})

// routes
app.route("/vote", routes.voteRoutes)
app.route("/user", routes.userRoutes)

module.exports = app