import { Router } from "express"
import { cancelarEvento, createEvento, editarEvento, listarEventos } from "../controllers/eventoController.js"

const router = Router()

router.post("/criar", createEvento)
router.get("/agenda", listarEventos)
router.put("/editar/:id", editarEvento)
router.delete("/cancelar/:id", cancelarEvento)


export default router;