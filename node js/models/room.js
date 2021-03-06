const mongoose = require('mongoose');
const { models } = require("mongoose");

const roomSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	maxcount:{
		type:Number,
		required:true
	},
	phonenumber:{
		type:Number,
		required:true
	},
	rentperday:{
		type:Number,
		required:true
	},
	imageurls:[],
	currentbookings:[],
	type:{
		type:String,
		required: true
	},
	descrebtion:{
		type:String,
		required:true
	}

},{timestamps:true})
 module.exports=  mongoose.model('Room' , roomSchema);