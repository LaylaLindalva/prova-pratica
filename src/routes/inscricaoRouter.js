import { Router } from "express";
import { inscreverParticipante,  eventoMaisPopular } from "../controllers/inscricaoController.js";

const router = Router()

router.post("/inscrever", inscreverParticipante)
router.get("/mais-popular", eventoMaisPopular)

export default router;