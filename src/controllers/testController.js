const connection = require("../database/connection")

const testConnection = async (req, res) => {
    try {
    await connection.raw("SELECT 1+1 as result")

    return res.json({message:"Banco conectado com sucesso!"})
    } catch (error)  {
        return res.status(500).json({ meesage: "Erro ao conectar ao banco!"})
    }


}

module.exports = {
    testConnection
}