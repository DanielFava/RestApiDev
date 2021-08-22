const express = require("express")
const router = express.Router();

const User = require("../../modals/users")

router.put("/users/:id", async (req, res) => {
  const dados = req.body;
  const id_Res = req.params.id;

  await User.findByIdAndUpdate(id_Res, dados)
  
  res.send("Alterado com Sucesso!")
})

module.exports = router