const FilmeModel = require("../models/FilmeModel")

const FilmeController = {
    async getAllFilmes(req, res) {
        const filmes = await FilmeModel.getAllFilmes()

        return res.json(filmes)
    },

    async createFilme(req, res){
        const {
            titulo,
            diretorID,
            generos
        } = req.body

       const filme = {
        titulo,
        diretorID
       }

       const filmeId = await FilmeModel.create(filmes, generos)

       return res.status(201).json({ id: filmeId })

    }
}

module.exports = FilmeController