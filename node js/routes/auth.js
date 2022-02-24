var express = require('express')
var employee = require("../models/user");
var router = express.Router()
var bodyParser = require('body-parser');
const {index} = require("../controllers/usercontroller");
var user_controller = require('../controllers/usercontroller')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.post('/login' ,user_controller.login )

module.exports = router