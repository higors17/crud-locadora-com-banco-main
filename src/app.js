const express = require("express")

const testRoutes = require("./routes/testRoutes")

const app = express()

app.use(express.json())

app.use("/test", testRoutes)

app.get("/", (req, res) => {
    res.send("API locadora funcionando!")
})

module.exports = app