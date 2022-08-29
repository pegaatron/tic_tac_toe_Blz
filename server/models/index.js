const db = require('../database/db.js');

module.exports = {
  getUser: (profile) => {
    return db.User.find({email: profile.email})
  },

  createUser: (profile) => {
    return db.User.create(profile)
  },

  getUserScore: (user) => {
    return db.User.findOne({email:user})
  },

  updateWinScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, {win: userData.win})
  },

  updateLossScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, {loss: userData.loss})
  },

  updateTieScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, {tie: userData.tie})
  },

  deleteUsers: () => {
    return db.User.deleteMany({})
  }
}