import conn from "../config/conn.js";

const tabelaParticipante = /*sql*/ `
 CREATE TABLE IF NOT EXISTS participantes(
    participante_id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
 )
`

conn.query(tabelaParticipante, (err) => {
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [participantes] criada")
})