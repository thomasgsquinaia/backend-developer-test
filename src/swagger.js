const swaggerAutogen = require("swagger-autogen")({openapi: '3.0.0'})

const doc = {
  info: {
    version: "1.0",
    title: "PlooralApiRestTest",
    description: "API REST Test Plooral",
  },
  //host: "localhost:3000",
  //basePath: "/",
  servers: [
    {url:'http://localhost:3001',description:"LocalTest"},
    {url:'http://ec2-54-94-2-165.sa-east-1.compute.amazonaws.com',description:"LocalProd"},
  ],
  //schemes: ['http', 'https'],
  consumes: ["application/json", "multipart/form-data"],
  produces: ["application/json"],
  tags: [
    { name: "companies", description: "Endpoints of companies" },
    { name: "jobs", description: "Endpoint of jobs" },
    { name: "feed", description: "Endpoint of feed" },
  ], 
  securityDefinitions: {
    token: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Token access",
    },
    apiKey: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Token access",
    },
  },
  definitions: {
  }
};

const outputFile = "../docs/swagger.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
