const express = require('express')
const router = express.Router()
const {InvItems} = require('../models')

router.get("/", async (req, res) => {
    const invList = await InvItems.findAll();
    res.json(invList)
});

router.post("/", async (req, res) => {
    const invItem = req.body
    await InvItems.create(invItem)
    res.json(invItem)
});

module.exports = router