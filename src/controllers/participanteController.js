import conn from "../config/conn.js";
import { v4 as uuidV4 } from "uuid";

export const createParticipante = (request, response) => {
    const {nome, email} = request.body

    if(!nome){
        response.status(400).json({message: "O nome é obrigatório"})
        return
    }
    if(!email){
        response.status(400).json({message: "O email é obrigatório"})
        return
    }
    if(!email.includes("@")){
        response.status(409).json({message: "O @ no email é obrigatório"})
        return
    }

    const checkSql = /*sql*/ `SELECT * FROM participantes WHERE ?? = ?`
    const checkSqlData = ["email", email]
    
    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao cadastrar participante"})
            return
        }

        if(data.length > 0){
            response.status(409).json({message: "Esse email já está em uso"})
            return
        }
    })

    const id = uuidV4()
    const insertSql = /*sql*/ `INSERT INTO participantes(??, ??, ??) VALUES (?, ?, ?)`

    const insertSqlData = ["participante_id", "nome", "email", id, nome, email]

    conn.query(insertSql, insertSqlData, (err) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao cadastrar participante"})
            return
        }
        response.status(201).json({message: "Participante cadastrado com sucesso"})
    })
}