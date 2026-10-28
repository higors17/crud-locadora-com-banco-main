const GeneroModel = require("../models/GeneroModel")

const GeneroController = {
    async getAllGeneros(req, res) {
        const generos = await GeneroModel.findAll()

        return res.json(generos)
    },

    async createGenero(req, res) {
        const { nome } = req.body

        const genero = await GeneroModel.create({
            nome
        })

        return res.status(201).json(genero)
    }
}

module.exports = GeneroController