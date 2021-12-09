const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/FSW135');
  console.log("Connected to the DB")
}

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['RS256']}))
app.use('/api/vote', require('./routes/voteRouter.js'))

app.use((err, req, res, next) =>{
    console.log(err)
      if(err.name === "Unauthorized Error"){
        res.status(err.status)
      }
    return res.send({errMsg: err.message})
})

app.listen(9000, () =>{
    console.log('server has started')
})