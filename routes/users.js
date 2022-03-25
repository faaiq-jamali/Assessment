const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {

    let name = req.body.name
    let alreadyPresent = await User.find({name})

    if(alreadyPresent.length){
      return res.status(200).json({ data: null, message: "Username Already Exists" });

    } else{
      
      let user = new User({name});
      user = await user.save();
  
      return res.status(200).json({ data: user, message: "OK" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message, });
  }

});

module.exports = router;