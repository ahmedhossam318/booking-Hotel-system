const mongoose = require('mongoose')



mongoose.connect(`mongodb://127.0.0.1:27017/mern-rooms`,
  { useUnifiedTopology: true, useNewUrlParser: true })
  .then(r => console.log(""));


module.exports= mongoose.connection.once('open',function(){
    console.log ('connection is made ');
}).on('error' , function(error){
    console.log('error is : ');
});