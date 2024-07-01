const express = require('express')
const router = express.Router()
const {InvItems} = require('../models')
const { validateToken } = require('../middlewares/authMiddleware')

router.get("/", async (req, res) => {
    const invList = await InvItems.findAll();
    res.json(invList)
});

router.post("/", validateToken, async (req, res) => {
    const invItem = req.body
    await InvItems.create(invItem)
    res.json(invItem)
});

module.exports = router