const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb://localhost/game',
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("database connected sucessfully");
  })
  .catch((err) => {
    console.log('error in setting up db')
  })
// function(){
//   mongoose.connection.db.dropDatabase();
// });

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  win: {
    type: Number,
    default: 0
  },
  loss: {
    type: Number,
    default: 0
  },
  tie: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model('users', UserSchema);
module.exports.User = User