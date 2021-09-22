//import mongoose
const mongoose = require('mongoose')

// import dotenv
require('dotenv').config()

//connect to database
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connection to Data Base succeeded'))
    .catch(() => console.log('Fail to connect to Data Base'))
}

module.exports = connect