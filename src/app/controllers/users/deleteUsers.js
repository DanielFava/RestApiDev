const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  // const { _id } = await User.findById(new_id);

  try {
   
    // if ( id !== _id ) {
    //   res.status(400).send({ error: 'Invalid User' })
    // }else {
    //   await User.findByIdAndDelete(id);
    //   res.send({ success: 'User Deleted Successfully' })
    // }
  } catch (error) {
    return res.status(400).send({ error: 'User Deletion Failed' })
  }
})

module.exports = router;