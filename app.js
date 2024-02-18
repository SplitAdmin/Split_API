import pkg from 'pg';
import UserService from "./controllers/userController.js";
const { Client } = pkg;
import express from "express";
import 'dotenv/config'
import { Sequelize } from 'sequelize';

// Routes 


// DataBase Connection
const app = express();

const client = new Client({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DB,
    user: process.env.DIALECT,
    password: process.env.SECRET,
});

const sequelize = new Sequelize(process.env.DB, process.env.DIALECT, process.env.SECRET, {
    host: 'localhost',
    dialect: process.env.DIALECT,

});
await client.connect().then(() => console.log("DB Connected"));

var x = new UserService(sequelize);
var y = await x.CreateUserAsync({ Id: 'c7db662e-9756-42c2-aff2-9280c21b0281', firstName: "X", lastName: "Y", email: "def@gmail.com" });
console.log(y);
await client.end();
