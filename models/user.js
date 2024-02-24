import { DataTypes } from "sequelize";
import db from "../config/db";
const User = db.sequelize.define('User', {
    Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
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
    schema: '.Split',
    tableName: 'User',
    timestamps: false,
    createdAt: true,
    updatedAt: false,
    // paranoid: true
});
sequelize.sync({ alter: true });

export default User;