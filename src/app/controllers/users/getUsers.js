const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.get("/users/:id?", async (req, res) => {
  const id_Res = req.params.id;

  const user_all = await User.find();
  const user_id = await User.findById( id_Res );
  
  if ( id_Res === undefined || id_Res !== user_id._id ) {
    res.send(user_all);
  }else {
    res.send(user_id);
  }
})

module.exports = router;