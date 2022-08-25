const db = require('../database/db.js');

module.exports = {
  getUserScore: (user) => {
  },

  updateWinScore: (userData) => {
    return db.findOneAndUpdate({email: userData.email}, { $inc: {win: 1}})
  },

  updateLossScore: (userData) => {
    return db.findOneAndUpdate({email: userData.email}, { $inc: {loss: 1}})
  },

  updateTieScore: (userData) => {
    return db.findOneAndUpdate({email: userData.email}, { $inc: {tie: 1}})
  },
}