const model = require('../models/index.js')

module.exports = {

  getUser: (req,res) => {
    let profile = {
      email: req.query.email,
      password: req.query.password
    }
    model.getUser(profile)
    .then((data) => {res.send(data).status(200)})
    .catch((err) => {console.log(err); res.sendStatus(404)})
  },

  createUser: (req, res) => {
    let profile = {
      email: req.body.email,
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
    let user = req.body.email
    model.getUserScore(user)
    .then((scores) => {res.send(scores).status(200)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateWinScore: (req,res) => {
    let data = {email: req.body.email, win: req.body.win}
    model.updateWinScore(data)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateLossScore: (req,res) => {
    let data = {email: req.body.email, loss: req.body.loss}
    model.updateLossScore(data)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  updateTieScore: (req,res) => {
    let data = {email: req.body.email, tie: req.body.tie}
    model.updateTieScore(data)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  }
}