import { compare, createAccessToken } from "../middlewares/auth/auth.js";
import Result from "../models/result.js";
import UserController from "./userController.js";

export async function signin(req, res) {
    const user = req.body;
    try {
        const user_res = await UserController.FindUserByEmail(user.email);
        if (user_res == null) throw new Error('user is not registered.Please signup!');
        const passwordMatch = compare(user.password, user_res.password);
        if (!passwordMatch) return res.status(401).send(new Result(null, "password not matched", false));
        const accessToken = createAccessToken({ Id: user_res.Id, email: user.email })
        user_res.password = "";
        return res.status(200).send(new Result({ ...user_res, accessToken }));
    } catch (error) {
        return res.status(403).send(new Result(null, error.message, false));
    }
}