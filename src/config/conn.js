import mysql from "mysql2"

const conn = mysql.createPool({
    connectionLimit: 10, 
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSD = "Sen@iDev77!.",
    database: process.env.MYSQL_DATAE = "_eventos",
})

conn.query("SELECT 1 + 1 AS Solution", (err, result) => {
    if(err){
        console.error(err)
        return
    }
    console.log("The solution is:", result[0].solution)
})

export default conn;