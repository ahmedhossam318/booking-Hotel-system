const mongoose = require('mongoose');
const Room = require('../models/room');
const  _ = require('lodash')

exports.index = function(req, res) {
	res.send('Hi ,room!')
}

exports.getAllRooms = async function(req, res) {
	try{
		const rooms = await Room.find({})
		return res.json(rooms)
	}
	catch (e) {
		res.status(404).json({message: e})
	}
}

exports.getRoomById = async function(req, res) {
	const id = req.body.id;
	try{
		const room = await Room.findOne({_id:id})
		return res.json(room)
	}
	catch (e) {
		res.status(404).json({message: e})
	}
}