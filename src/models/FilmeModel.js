const connection = require("../database/connection")

const FilmeModel = {
    async findAll() {
        return await connection.raw("SELECT * FROM filmes")
    },

    async create(filme, generos) {
        const { titulo, diretorId } = filme

        const insereFilme = await connection.raw(
            "INSERT INTO filmes (titulo, diretor_id) VALUES (?, ?)",
            [titulo, diretorId]
        )

        const filmeId = insereFilme.lastID

        // inserir um relacionamento para o novo filme para cada genero
        if(generos && generos.length > 0) {
            for( const generoId of generos ) {
                await connection.raw(
                    "INSERT INTO filmes_generos (filme_id, genero_id) VALUES (?, ?)",
                    [filmeId, generoId]
                )
            }
        }

        return filmeId        
    },

    async findById( id ) {
        const filmeResult = await connection.raw(
            "SELECT * FROM filmes WHERE id = ?",
            [ id ]
        )

        const filme = filmeResult[0]

        if( !filme ) return null

        const generos = await connection.raw(`
            SELECT g.id, g.nome FROM generos g
            JOIN filmes_generos fg ON g.id = fg.genero_id
            WHERE fg.filme_id = ?    
            `,
            [ id ]
        )

        return {
            ...filme,
            generos
        }
    }
}

module.exports = FilmeModel