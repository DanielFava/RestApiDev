const express = require("express");
const router = express.Router();

const User = require("../../modals/users");

router.post("/users", async (req, res) => {
  const { email, name } = req.body

  try {
    if ( await User.findOne({ email }) )
      return res.status(400).send({ error: 'Email Already Exists' });

    if ( !email || !name )
      return res.status(400).send({ error: 'Invalid Registration, Empty Fields' });
    
    await User.create(req.body)
    return res.send({ success: 'User Created Successfully' })
  } catch (error) {
    return res.status(400).send({ error: 'Registration Failed' })
  }
})

module.exports = router