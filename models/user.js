import { DataTypes } from "sequelize";
import db from "../config/db.js";
const User = db.sequelize.define('User', {
    Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
        //TODO validate:
    },
    phone: {
        type: DataTypes.NUMBER
    },
    password: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    // schema: '.Split',
    tableName: 'User',
    timestamps: false,
    createdAt: true,
    updatedAt: false,
    // paranoid: true
});
// db.sequelize.sync({ alter: true });

export default User;