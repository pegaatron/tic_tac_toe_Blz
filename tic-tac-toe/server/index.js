require('dotenv').config()
const express = require('express');
const db = require('./database/db.js');
const controller = require('./controllers');
var cors = require('cors')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// TEST Route
app.get('/test', controller.test);

// USER Routes
app.post('/user', controller.createUser);

// SCORE Routes
app.get('/score', controller.getUserScore);
app.put('/score', controller.updateWinScore);
app.put('/score', controller.updateLossScore);
app.put('/score', controller.updateTieScore);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})