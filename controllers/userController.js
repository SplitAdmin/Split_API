import User from '../models/user.js';
// const User = require('../models/user.js');
class UserController {
    constructor(sequelize) {
        User(sequelize);
        this.models = sequelize.models;
    }
    async CreateUserAsync({ Id, firstName, lastName, email }) {
        try {
            return await this.models.User.create({ Id, firstName, lastName, email });
        } catch (error) {
            return error;
        }
    }
}
export default UserController