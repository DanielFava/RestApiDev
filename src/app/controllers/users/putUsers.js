const express = require("express")
const router = express.Router();

const User = require("../../modals/users")

router.put("/users/:id", async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  // const { _id } = await User.findById(id);

  try {
    // if ( await User.findOne({ email }) ) {
    //   res.status(400).send({ error: 'Email Already Exists' });
    // }
    
    // if ( !email || !name ) {
    //   res.status(400).send({ error: 'Invalid Registration, Empty Fields' });
    // }
    
    // if ( id !== _id ) { 
    //   res.status(400).send({ error: 'Invalid User' })
    // }
    // await User.findByIdAndUpdate(id, dados)
    
  } catch (error) {
    return res.status(400).send({ error: 'Failed To Change' })
  }

  // const dados = req.body;
  // const id_Res = req.params.id;

  // await User.findByIdAndUpdate(id_Res, dados)
  
  // res.send("Alterado com Sucesso!")
})

module.exports = router