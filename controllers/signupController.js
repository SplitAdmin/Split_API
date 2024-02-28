import UserController from "../controllers/userController.js";
import { createAccessToken } from "../middlewares/auth/auth.js";
import Result from "../models/result.js";
export async function signup(req, res) {
    const user = req.body;
    try {
        const user_res = await UserController.FindUserByEmail(user.email);
        if (user_res != null) throw new Error('user is already registered.Please login!');
        let createdUser = await UserController.CreateUserAsync({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            image: user.image,
        });
        createdUser.password = "";
        const accessToken = createAccessToken({ Id: createdUser.Id, email: createdUser.email })
        return res.status(200).send(new Result({ ...createdUser, accessToken }));
    } catch (error) {
        return res.status(403).send(new Result(null, error.message, false));
    }
}