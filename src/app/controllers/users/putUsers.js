const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.put("/users/:id", async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const dados = { name, email };

  try {
    const users = await User.findById(id);

    if (users && users._id) {
      if (!name || !email) {
        return res
          .status(400)
          .send({ error: "Invalid Registration, Empty Fields" });
      } else if (users.email === dados.email) {
        return res.status(400).send({ error: "Email Already Exists" });
      } else await User.findByIdAndUpdate(id, dados);
      return res.send({ success: "User Updated Successfully" });

      console.log(dados);
    } else {
      return res.status(404).send({ error: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Failed To Change" });
  }
});

module.exports = router;
