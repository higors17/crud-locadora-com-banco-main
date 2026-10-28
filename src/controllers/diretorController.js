const DiretorModel = require("../models/DiretorModel")

const DiretorController = {
    async getAllDiretores(req, res) {
        const diretores = await DiretorModel.findAll()

        return res.json(diretores)
    },

    async createDiretor(req, res) {
        const { nome } = req.body

        const diretor = await DiretorModel.create({
            nome
        })

        return res.status(201).json(diretor)
    }
}

module.exports = DiretorController