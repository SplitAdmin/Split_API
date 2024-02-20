import dbConfig from "../config/db.js";
import User from "../models/user.js";
const sequelize = dbConfig.sequelize;
const db = {};

db.sequelize = sequelize;

db.user = User(sequelize);


// SECTION - relations


export default db;