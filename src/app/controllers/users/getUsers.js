const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.get("/users/:id?", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.send(await User.find());
    } else {
      const user = await User.findById(id);
      if (user) return res.send(user);
      else return res.status(404).send({ error: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).send({ error: "User Search Failed" });
  }
});

module.exports = router;
