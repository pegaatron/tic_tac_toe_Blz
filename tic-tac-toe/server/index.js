require('dotenv').config()
const express = require('express');
const db = require('./database/db.js');
const controller = require('./controllers');
var cors = require('cors')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// USER Routes
app.post('/user', controller.createUser);
app.get('/user', controller.getUser);

// SCORE Routes
app.get('/score', controller.getUserScore);
app.put('/score/wins', controller.updateWinScore);
app.put('/score/losses', controller.updateLossScore);
app.put('/score/ties', controller.updateTieScore);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})