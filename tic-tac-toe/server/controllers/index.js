const model = require('../models/index.js')

module.exports = {
  getUserScore: (req, res) => {
    let user = req.body.email.toLowerCase()
    model.getUserScore(user)
    .then((scores) => {res.send(scores).status(200)})
    .catch((err) => {res.send(err).status(404)})
  },

  updateWinScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {res.send(err).status(404)})
  },

  updateLossScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {res.send(err).status(404)})
  },

  updateTieScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {res.send(err).status(404)})
  }
}