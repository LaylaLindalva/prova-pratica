import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid"


export const createPalestrante = (request, response) => {
    const {nome, expertise} = request.body

    if(!nome){
        response.status(400).json({message: "O nome é obrigatório"})
        return
    }
    if(!expertise){
        response.status(400).json({message: "A expertise é obrigatória"})
        return
    }

    const id = uuidv4()
    const insertSql = /*sql*/ `INSERT INTO palestrantes(??, ??, ??) VALUES (?, ?, ?)`

    const insertSqlData = ["palestrante_id", "nome", "expertise", id, nome, expertise]

    conn.query(insertSql, insertSqlData, (err) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao cadastrar palestrante"})
            return
        }
        response.status(201).json({message: "Palestrante cadastrado com sucesso"})
    })
}

export const listarPalestrantes = (request, response) => {
    const getSql = /*sql*/ `SELECT * FROM palestrantes`

    conn.query(getSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro as buscar palestrantes"})
            return
        }
        response.status(200).json(data)
    })
}