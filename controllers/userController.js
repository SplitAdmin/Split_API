import { generateHash } from '../middlewares/auth/auth.js';
import { v4 as uuidv4 } from 'uuid'
import db from '../models/index.js';
const UserDM = db.sequelize.models.User;
class UserController {
    static async CreateUserAsync({ name, email, phone = null, password = null, image = null }) {
        try {
            if (password != null) password = generateHash(password);
            const Id = uuidv4();
            return (await UserDM.create({ Id, name, email, password, phone, image })).dataValues;
        } catch (error) {
            return error;
        }
    }
    static async FindUserByEmail(email) {
        try {
            const user = await UserDM.findOne({ where: { email: email } });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserController

