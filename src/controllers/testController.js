const connection = require("../database/connection")

const testConnection = async (req, res) => {
    try {
        await connection.raw("SELECT 1+1 as result")

        return res.json({ message: "Banco conectado com sucesso :)" })
    } catch (error) {
        return res.status(500).json({ message: "Erro ao conectar com o banco :(" })
    }
}

const listTables = async (req, res) => {
    try {
        const tables = await connection.raw(
            "SELECT name FROM sqlite_master WHERE type = 'table'"
        )

        return res.json(tables)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    testConnection,
    listTables
}