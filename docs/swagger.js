import swaggerAutogen from "swagger-autogen";

const doc = {};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./app.js', '../routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);