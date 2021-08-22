const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.delete("/users/:id", async (req, res) => {
  const id_Res = req.params.id;

  await User.findByIdAndDelete(id_Res);

  res.send("Deletado com Sucesso!");
})

module.exports = router;