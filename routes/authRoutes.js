import { signup } from "../controllers/signupController.js";
import { Router } from "express";
const router = Router();

router.route('/auth/signup').post(signup);
export default router