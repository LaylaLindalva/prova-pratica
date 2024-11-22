import { Router } from "express";
import { createParticipante } from "../controllers/participanteController.js";

const router = Router()

router.post("/participantes/registrar", createParticipante)

export default router;