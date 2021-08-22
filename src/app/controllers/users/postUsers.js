const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.post("/users", async (req, res) => {
  const dados = req.body
  
  const users = new User({
    name: dados.name,
    email: dados.email
  })

  await users.save();
  res.send("Criado com Sucesso!");
})

module.exports = router