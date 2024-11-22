import conn from "../config/conn.js";

const tabelaInscricao = /*sql*/ `
   CREATE TABLE IF NOT EXISTS inscricoes(
    inscricao_id VARCHAR(255) PRIMARY KEY,
    participanteId VARCHAR(255) NOT NULL,
    eventoId VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
   )
`

conn.query(tabelaInscricao, (err, results, filds) => {
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [inscrição] criada")
})