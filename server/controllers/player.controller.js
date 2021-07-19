const { mongoose } = require("mongoose");
const Player = require("../models/player.model");

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.status(400).json({message:"GetAll failed", error: err}));
}

module.exports.createPlayer = (req, res) => {
    const {name, preferredPos} = req.body;
    Player.create({
        name,
        preferredPos
    })
        .then(player => res.json(author))
        .catch(err => res.status(400).json({message:"Create failed", error: err}));
}

module.exports.getPlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.status(400).json({message:"GetOne failed", error: err}));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json({message:"Update failed", error: err}));
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json({message: "Delete failed", error: err}));
}