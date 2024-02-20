import db from '../models/index.js';
import UserController from "../controllers/userController.js";
const sequelize = db.sequelize;
async function signup(req, res) {
    console.log(req.body);
    const user = req.body;
    try {
        let userSvc = new UserController(sequelize);
        const user_res = await userSvc.FindUserByEmail(user.email);
        if (user_res != null) throw new Error('user is already registered.Please login!');
        let val = await userSvc.CreateUserAsync({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
        console.log(val.dataValues);
        return res.send(val.dataValues);
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default { signup };