const express = require('express');
const app = express();

const mongoose = require("mongoose");
const db = require("./database/config");

const route = require("./routes/router");
require('dotenv').config();

const port = process.env.REST_API_PORT;

mongoose
  .connect(db.uri, {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => {
    app.use(express.json());
    app.use("/", route);

    app.listen(port, () => {
      console.log('Aplicação rodando na porta ' + port);
    });
  });