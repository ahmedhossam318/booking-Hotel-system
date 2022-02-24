const express = require('express')
const router = express.Router()
const room_controller = require('../controllers/roomController')


router.get('/', room_controller.index)
router.get('/getallrooms', room_controller.getAllRooms)
router.post('/getroombyid', room_controller.getRoomById)
module.exports = router;