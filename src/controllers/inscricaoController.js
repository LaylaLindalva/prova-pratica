import conn from "../config/conn.js";
import {v4 as uuidv4} from "uuid"

export const inscreverParticipante = (request, response) => {
    const {participanteId, eventoId} = request.body

    if(!participanteId){
        response.status(400).json({message: "O id do participante é obrigatório"})
        return
    }
    if(!eventoId){
        response.status(400).json({message: "O id do evento é obrigatório"})
        return
    }

    const id = uuidv4()
    const insertSql = /*sql*/ `INSERT INTO inscricoes(??, ??, ??) VALUES (?, ?, ?)`

    const insertSqlData = ["inscricao_id","participanteId", "eventoId", id, participanteId, eventoId]

    conn.query(insertSql, insertSqlData, (err) => {
        if(err){
            response.status(500).json({message: "Não foi possível se inscrever no evento"})
            return
        }
        response.status(201).json({message: "Inscrição realizada com sucesso!"})
    })

}

export const eventoMaisPopular = (request, response) => {
    const getMaisPopular = /*sql*/ `SELECT COUNT(*) FROM eventos WHERE eventoId = eventoId`

    conn.query(getMaisPopular, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao listar o evento mais popular"})
            return
        }
       response.status(200).json(data) 
    })
    
}