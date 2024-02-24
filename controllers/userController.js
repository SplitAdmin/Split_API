import auth from '../middlewares/auth/auth.js';
import { v4 as uuidv4 } from 'uuid'
import db from '../models/index.js';
class UserController {
    static async CreateUserAsync({ firstName, lastName, email, password = null }) {
        try {
            if (password != null) password = auth(password);
            const Id = uuidv4();
            return await db.User.create({ Id, firstName, lastName, email, password });
        } catch (error) {
            return error;
        }
    }
    static async FindUserByEmail(email) {
        try {
            const user = await db.User.findOne({ where: { email: email } });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserController

