import { Sequelize } from "sequelize";
import 'dotenv/config';

const db = {}

// const sequelize = new Sequelize(
//     process.env.DB,
//     process.env.DIALECT,
//     process.env.PWD, {
//     host: process.env.HOST,
//     dialect: process.env.DIALECT,
// });
const sequelize = new Sequelize(
    process.env.DB_URl
);

db.sequelize = sequelize

export default db
