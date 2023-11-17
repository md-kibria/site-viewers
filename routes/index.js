const router = require('express').Router()

const newData = require('../models/DataModel')

router.get('/', (_req, res) => {
    res.json(newData.getData())
})


router.post('/', (req, res) => {
    newData.addData(req)
    res.status(200).json({
        "message": "Successfully added"
    })
})

module.exports = router;