import conn from "../config/conn.js";
import {v4 as uuidv4} from "uuid"

export const enviarFeedback = (request, response) => {
    const {participanteId, eventoId, nota, comentario} = request.body

    if(!participanteId){
        response.status(400).json({message: "O id do participante é obrigatório"})
        return
    }
    if(!eventoId){
        response.status(400).json({message: "O id do evento é obrigatório"})
        return
    }
    if(!nota){
        response.status(400).json({message: "A nota é obrigatória"})
        return
    }
    if(!comentario){
        response.status(400).json({message: "O comentário é obrigatório"})
        return
    }

    const id = uuidv4()
    const insertSql = /*sql*/ `INSERT INTO feedbacks(??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`

    const insertSqlData = ["feedback_id", "participanteId", "eventoId", "nota", "comentario", id, participanteId, eventoId, nota, comentario]

    conn.query(insertSql, insertSqlData, (err) => {
        if(err){
            response.status(500).json({message: "Não foi possível enviar o feedback"})
            return
        }
        response.status(201).json({message: "Feedback enviado com sucesso!"})
    })

}