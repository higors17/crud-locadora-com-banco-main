const express = require("express")

const testRoutes = require("./routes/testRoutes")
const generoRoutes = require("./routes/GeneroRoutes")

const app = express()

app.use(express.json())

app.use("/test", testRoutes)
app.use("/genero", generoRoutes)

app.get("/", (req, res) => {
    res.send("API locadora funcionando!")
})

module.exports = app