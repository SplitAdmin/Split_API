import express from "express";
import './extension/index.js'
import authRoutes from './routes/authRoutes.js'

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json' assert { type: 'json'};
const app = express();

app.put(authRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen('8080', () => { console.log('app listening at 8080'); })