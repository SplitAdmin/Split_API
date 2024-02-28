import { signin } from "../controllers/signinController.js";
import { signup } from "../controllers/signupController.js";
import { Router } from "express";
const router = Router();

router.route('/auth/signup').post(signup);
router.route('/auth/signin').post(signin);
export default router