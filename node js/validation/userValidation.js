const express = require('express')
const joi = require('joi')
const app = express()


exports.userValidation = function(user){
    const schema = joi.object( {
        name: joi.string().min(3).max(44).required(),
        email:joi.string().min(7).max(255).email().required(),
        password:joi.string().required().min(8).max(255)
    })

    return schema.validate(user)
}

exports.loginUserValidation = function(user){
    const schema = joi.object( {
        email:joi.string().min(7).max(255).email().required(),
        password:joi.string().required().min(8).max(255)
    })

    return schema.validate(user)
}