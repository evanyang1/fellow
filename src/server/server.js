const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://localhost/test'

const app = express()

mongoose.connect(MONGO_URL, {useNewUrlParser: true})
  .then(() => {
    console.log("DB connected")
  }).catch(error => console.log(error))

const { User } = require('./Model/user')

app.use(bodyParser.json()) // converts body data to json

const port = /*process.ENV.port ||*/ 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
// post user data to db
app.post('/api/user/signup', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  }).save((err, response) => { // save: take a JSON object & stores in database
    if (err){
      res.status(400).send(err)
    }
    res.status(200).send(response)
  })
})
