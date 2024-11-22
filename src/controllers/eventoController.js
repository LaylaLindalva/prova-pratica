import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid"


export const createEvento = ( request, response) => {
    const {titulo, data_, palestranteId} = request.body

    if(!titulo){
        response.status(400).json({message: "O título é obrigatório"})
        return
    }
    if(!data_){
        response.status(400).json({message: "A data é obrigatória"})
        return
    }
    if(!palestranteId){
        response.status(400).json({message: "O id do palestrante é obrigatório"})
        return
    }

    const id = uuidv4()
    const insertSql = /*sql*/ `INSERT INTO eventos(??, ??, ??, ??) VALUES (?, ?, ?, ?)`

    const insertSqlData = ["evento_id", "titulo", "data_", "palestranteId", id, titulo, data_, palestranteId]

    conn.query(insertSql, insertSqlData, (err) => {
        if(err){
            response.status(500).json({message: "Erro ao cadastrar um evento"})
            return
        }
        response.status(201).json({message: "Evento cadastrado com sucesso"})
    })
}


export const listarEventos = (request, response) => {

    const getEventos = /*sql*/ `SELECT * FROM eventos`

    conn.query(getEventos, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao listar os eventos"})
            return
        }
        response.status(200).json(data)
    })
}

export const editarEvento = (request, response) => {

    const {id} = request.params


    const {titulo, data_, palestranteId} = request.body

    if(!titulo){
        response.status(400).json({message: "O título é obrigatório"})
        return
    }
    if(!data_){
        response.status(400).json({message: "A data é obrigatória"})
        return
    }
    if(!palestranteId){
        response.status(400).json({message: "O id do palestrante é obrigatório"})
        return
    }

    const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ?`
    const checkSqlData = ["evento_id", id]
    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            return response.status(500).json({message: "Erro ao verificar evento para atualização"})
        }

        if(data.length === 0){
            return response.status(404).json({message: "Evento não existe"})
        }

        const updateSql = /*sql*/ `UPDATE eventos SET titulo = "${titulo}", data_ = "${data_}", palestranteId = "${palestranteId}" WHERE evento_id = "${id}"`

        conn.query(updateSql, (err, info) => {
            if(err){
                console.error(err)
                response.status(500).json({message: "Erro ao atualizar evento"})
                return
            }
            console.log(info)
            response.status(200).json({message: "Evento atualizado com sucesso!"})
        })
    })
}

export const cancelarEvento = (request, response) => {
    const {id} = request.params

   

    const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ?`
    const checkSqlData = ["evento_id", id]
    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            return response.status(500).json({message: "Erro ao verificar evento para cancelar"})
        }

        if(data.length === 0){
            return response.status(404).json({message: "Evento não existe"})
        }
        
        
        const deleteSql = /*sql*/ `DELETE FROM eventos WHERE evento_id = "${id}"`

        conn.query(deleteSql, (err, info) => {
            if(err){
                return response.status(500).json({message: "Não foi possível cancelar o evento"})
            }
            console.log(info)
            response.status(200).json({message: "Evento cancelado com sucesso!"})
        })
    })
}
