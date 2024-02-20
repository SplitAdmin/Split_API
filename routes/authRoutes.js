import signupController from "../controllers/signupController.js";
import { Router } from "express";
const router = Router();

router.route('/auth/signup').post(() => { signupController() });

export default router