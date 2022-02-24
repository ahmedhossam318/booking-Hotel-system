const express = require('express')
const employee = require("../models/user");
const router = express.Router()
const auth = require('../middleware/auth')
const {index} = require("../controllers/usercontroller");
const user_controller = require('../controllers/usercontroller');
const admin = require('../middleware/admin');


router.get('/' ,user_controller.index)
router.post('/register',user_controller.create_user )
router.get('/profile', user_controller.user_profile)
router.post('/login',user_controller.login)

module.exports = router