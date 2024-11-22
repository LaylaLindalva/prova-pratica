import conn from "../config/conn.js"

const tabelaPalestrante = /*sql*/ `
 CREATE TABLE IF NOT EXISTS palestrantes(
    palestrante_id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    expertise VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

conn.query(tabelaPalestrante, (err, results, filds) => {
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [palestrantes] criada")
})