const express = require('express');
require('express-async-errors')
const databaseConnection = require('./config/databaseConnection')
const helmet = require('helmet')
const compression = require('compression')
const logger = require('./config/logger')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.use(express.json())
app.use(helmet())

// cross origin policy
const cors = require('cors');
app.use(cors());

// room route

const roomRouter = require('./routes/room')
app.use('/api/rooms' , roomRouter)

// user Route
const userRouter = require('./routes/user')
app.use('/api/users' , userRouter)


// for error pages
app.all('*',(req, res ,next)=>{
    res.status(404).json({
        status:'false',
        message:'Page Not Found ! '
    })
})


 app.get('/', function(req , res){
          res.send("Hi , Ahmed")

 });

//-------------------------------------------

// room model
//
// const Room = require('./models/room')
//
// const room = new Room;




//------------------------------------------


const port = process.env.port || 5000;
app.listen(port , ()=>console.log('app is Runing on port '+ port ));