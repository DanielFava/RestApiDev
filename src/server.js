require("dotenv").config();

const express = require("express");
const app = express();
const route = require("./routes/router");
const port = process.env.REST_API_PORT;

app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log("Aplicação rodando na porta " + port);
});
