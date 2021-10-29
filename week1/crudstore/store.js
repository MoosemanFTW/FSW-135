const express = require('express');
const app = express();
// const inventory = require('invSchema')

app.listen(3000, () =>{
    console.log('sever has started')
});

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/TBD',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
) 

app.get('/', (req, res) =>{
    res.send('Hello there')
});