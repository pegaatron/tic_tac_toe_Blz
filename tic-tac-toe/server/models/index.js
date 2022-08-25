const db = require('../database/db.js');

module.exports = {
  createUser: (profile) => {
    return db.User.create(profile)
  },

  getUserScore: (user) => {
    return db.User.findOne({email:user})
  },

  updateWinScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, { $inc: {win: 1}})
  },

  updateLossScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, { $inc: {loss: 1}})
  },

  updateTieScore: (userData) => {
    return db.User.findOneAndUpdate({email: userData.email}, { $inc: {tie: 1}})
  },

  deleteUsers: () => {
    return db.User.deleteMany({})
  }
}