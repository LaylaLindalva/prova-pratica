import { Router } from "express";
import { enviarFeedback } from "../controllers/feedbacksController.js";

const router = Router()

router.post("/feedback", enviarFeedback)

export default router;