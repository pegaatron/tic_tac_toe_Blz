const model = require('../models/index.js')

module.exports = {
  test: (req,res) => {
    res.sendStatus(200)
  },

  createUser: (req, res) => {
    let profile = {
      email: req.body.email.toLowerCase(),
      password: req.body.password
    }
    model.createUser(profile)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  getUserScore: (req, res) => {
    let user = req.body.email.toLowerCase()
    model.getUserScore(user)
    .then((scores) => {res.send(scores).status(200)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateWinScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateLossScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateTieScore: (req,res) => {
    let user = req.body.email.toLowerCase()
    model.putUserScore(user)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  }
}