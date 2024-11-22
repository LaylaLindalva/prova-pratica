import conn from "../config/conn.js";

const tabelaEvento = /*sql*/ `
  CREATE TABLE IF NOT EXISTS eventos(
    evento_id VARCHAR(255) PRIMARY KEY, 
    titulo VARCHAR(255) NOT NULL,
    data_ DATE NOT NULL,
    palestranteId VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
  )
`

conn.query(tabelaEvento, (err, results, filds) => {
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [eventos] criada")
})