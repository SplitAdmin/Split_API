import auth from '../middlewares/auth/auth.js';
import { v4 as uuidv4 } from 'uuid'
import User from '../models/user.js';
class UserController {
    constructor(sequelize) {
        User(sequelize);
        this.models = sequelize.models;
    }
    async CreateUserAsync({ firstName, lastName, email, password = null }) {
        try {
            if (password != null) password = auth(password);
            const Id = uuidv4();
            return await this.models.User.create({ Id, firstName, lastName, email, password });
        } catch (error) {
            return error;
        }
    }
    async FindUserByEmail(email) {
        try {
            const user = await this.models.User.findOne({ where: { email: email } });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserController

