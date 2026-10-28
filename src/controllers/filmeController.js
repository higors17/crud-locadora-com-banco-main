const FilmeModel = require("../models/FilmeModel")

const FilmeController = {
    async getAllFilmes(req, res) {
        const filmes = await FilmeModel.getAllFilmes()

        return res.json(filmes)


    },

    async getFilmeById(req, res) {
        const { id } = req.params

        const filme = await FilmeModel.findById(id)

        return res.json(filme)
    },

      async getFilmeByFiltro(req, res) {
        const { titulo, diretor, genero } = req.query

        const filme = await FilmeModel.search({
             titulo,
             genero,
             diretor
       
    
    
       } )

        return res.json(filme)
    },

    async createFilme(req, res) {
        const {
            titulo,
            diretorId,
            generos
        } = req.body

        const filme = {
            titulo,
            diretorId
        }

        const filmeId = await FilmeModel.create(filme, generos)
        
        return res.status(201).json({ id: filmeId })
    }
}

module.exports = FilmeController