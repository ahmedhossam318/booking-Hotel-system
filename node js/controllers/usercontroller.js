const mongoose = require('mongoose');
const {User} = require("../models/user");
const user_validate = require('../validation/userValidation')
const  _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.index = function (req,res){
    res.send('the first render controller with Node JS ~^^-')
}
convertToUser = function (user){
   let newUser = new User()

    return newUser
}

const validate = function (user, res) {
    const {error} = user_validate.userValidation(user)
    if (error)
        return res.send({created:false , message:error.details[0].message })
};
exports.create_user = async function (req , res ) {
  const user = _.pick(req.body, ["name", "email", "password"]);
  validate(user,res)
  try{
    const found = await User.findOne({ email: user.email });
    if (!_.isEmpty(found))
      return res.send({exist:true ,user:found})
    const saltRound = 10
    const salt  = await bcrypt.genSalt(saltRound)
    user.password = await bcrypt.hash(user.password,salt)
    let userModel = new User(user)
    await userModel.save()
    const jwt_tokens = userModel.generateTokens()
    res.send({created: true , user})
  }
  catch (e) {
    res.status(404).send({message: e});
  }
}

exports.login = async  function (req , res) {
    var user =_.pick(req.body,['email','password'])
    loginValidate(user,res)
   try{
     const found = await User.findOne({email: user.email});
     if (_.isEmpty(found))
       return res.send({status:false,message:'invalid Email or Password'})
     const checkPassword = await bcrypt.compare( user.password,found.password )
     if (!checkPassword)
       return res.send({status:false ,message:'invalid Email or Password'})
     const jwt_tokens = found.generateTokens()
     res.send({status:true, user:found})
   }
  catch (e){
    res.status(404).send({message: e});
  }
}

var loginValidate = function (user,res) {
    const {error} = user_validate.loginUserValidation(user)
    if (error)
        return res.send({created:false ,message:error.details[0].message}  )
}

exports.user_profile = async function (req , res ) {
   const user = _.pick(req.body,["_id"])
    try{
      const profile = await User.findById(user._id);
      res.send({status:true , user:profile})
    }
    catch (e) {
      res.status(404).send({message: e});

    }
}