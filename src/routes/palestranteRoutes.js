import { Router } from "express"
import { createPalestrante, listarPalestrantes } from "../controllers/palestrantesController.js"

const router = Router()

router.post("/palestrantes", createPalestrante)
router.get("/palestrantes", listarPalestrantes)

export default router;