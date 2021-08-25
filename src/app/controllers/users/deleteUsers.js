const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user && user._id) {
      await User.findByIdAndDelete(id);
      return res.send({ success: "User Deleted Successfully" });
    } else {
      return res.status(404).send({ error: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).send({ error: "User Deletion Failed" });
  }
});

module.exports = router;
