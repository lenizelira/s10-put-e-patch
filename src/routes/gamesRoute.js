const express = require('express')
const controller = require('../controller/gamesController')
const router = express.Router()
const cors = require('cors')

router.put('/games/:id', cors(), controller.atualizar)
router.patch('/games/:id', cors(), controller.update)

module.exports = router


