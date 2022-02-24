const mongoose = require('mongoose');
const {models} = require("mongoose");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
    name:
        {
            type : String,
            required:true,
            minlength:3,
            maxlength:44,
        },
    email:
        {
            type:String,
            required:true,
            unique:true,
            minlength:7,
            maxlength:255,
        },
     password :
        {
            type:String,
            required: true,
            minlength:8,
            maxlength:1024,
        },
        isAdmin:
          {
         type: Boolean,
         default:false
          }


},{
  timestamps:true
})
 userSchema.methods.generateTokens = function () {
     const jwt_token  = jwt.sign({_id:this.id,isAdmin:this.isAdmin} , 'key')
     return jwt_token
 }
exports.User = mongoose.model('User',userSchema)