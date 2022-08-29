const Post = require('../models/index.js');
const UserData = require('./user.json');

Post.deleteUsers()
.then(() => Promise.all(UserData.map((user) => Post.createUser(user))))
.then(() => console.log('database has been reset'))
.catch((err) => console.log('Error in resetting db: ', err))