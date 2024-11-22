import "dotenv/config"
import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3333
const app = express()

import conn from "./config/conn.js"

import "./models/palestranteModel.js"
import "./models/eventoModel.js"
import "./models/participanteModel.js"
import "./models/inscricaoModel.js"
import "./models/feedbackModel.js"

import palestranteRoutes from "./routes/palestranteRoutes.js"
import eventoRouter from "./routes/eventoRouter.js"
import participanteRouter from "./routes/participanteRouter.js"
import inscricaoRouter from "./routes/inscricaoRouter.js"
import feedbackRouter from "./routes/feedbackRouter.js"

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/eventos", palestranteRoutes, eventoRouter, participanteRouter, inscricaoRouter, feedbackRouter)

app.listen(PORT, () => {
    console.log(`Servidor on ${PORT}`)
})