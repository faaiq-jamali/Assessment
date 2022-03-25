const { Message } = require('../models/message');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        
        let message = new Message({senderId:req.body.senderId, messageContent: req.body.messageContent});
        message = await message.save();

        return res.status(200).json({data: message, message: "OK" });
    } catch (e) {
        return res.status(400).json({ message: e.message});
    }

});


module.exports = router;