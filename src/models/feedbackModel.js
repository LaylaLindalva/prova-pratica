import { response } from "express";
import conn from "../config/conn.js";

const tableFeedback = /*sql*/ `
  CREATE TABLE IF NOT EXISTS feedbacks(
    feedback_id VARCHAR(255) PRIMARY KEY,
    participanteId VARCHAR(255) NOT NULL,
    eventoId VARCHAR(255) NOT NULL,
    nota INT NOT NULL,
    comentario VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
  )
`

conn.query(tableFeedback, (err, results, filds) => {
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [feedbacks] criada")
})