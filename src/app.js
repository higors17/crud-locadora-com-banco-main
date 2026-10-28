const express = require("express")

const testRoutes = require("./routes/testRoutes")
const generoRoutes = require("./routes/generoRoutes")
const filmeRoutes = require("./routes/filmeRoutes")
const diretorRoutes = require("./routes/diretorRoutes")

const app = express()

app.use(express.json())

app.use("/test", testRoutes)
app.use("/generos", generoRoutes)
app.use("/filmes", filmeRoutes)
app.use("/diretores", diretorRoutes)

app.get("/", (req, res) => {
    res.send("API locadora funcionando!")
})

module.exports = app