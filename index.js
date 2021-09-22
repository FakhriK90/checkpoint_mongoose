const express = require('express')
const app = express()
const port = process.env.PORT || 6000

const connect = require('./connection/connect')
const user = require ('./Model/user')
const users = ('./users')

connect()

//*************************Create a user having this prototype:********************************

// let firstUser = {
//   name: 'Fakhri',
//   age: 30,
//   favoriteFood: ['Paella', 'Pizza', 'Lasagne'],
// }

//*************************Create and Save a Record of a Model***********************************

// const AddUser = () => {
//   const user = new user(firstUser)
//   user.save((err) => {
//     err ? console.log('Error', err) : console.log('Done')
//   })
// }
// AddUser()

//*************************Create Many Records with model.create()********************************

// const AddMany = () => {
//   user
//     .create(users)
//     .then(console.log('Users added successfully'))
//     .catch((err) => console.log('Somthing went wrong when added users'))
// }
// AddMany()

//*************************Use model.find() to Search Your Database********************************

// const findUser = () => {
//   user
//     .find({ name: 'oussama' })
//     .then((res) => console.log(res))
//     .catch((err) => console.log('Somthing went wrong when retrieving data'))
// }
// findUser()

//***********Use model.findOne() to Return a Single Matching Document from Your Database************

// const findUser = () => {
//   user.findOne({ favoriteFood: 'Tacos' }, (err, data) => {
//     err ? console.log('Error', err) : console.log('Data', data)
//   })
// }
// findUser()


//********************Use model.findById() to Search Your Database By _id****************************

// let userId = { _id: '60d9b71eb7c4501ad0a38425' }

// const findUserById = () => {
//   user.findById(userId, (err, data) => {
//     err ? console.log('Error', err) : console.log('Data', data)
//   })
// }
// findUserById()

//*****************Perform Classic Updates by Running Find, Edit, then Save***************************

// let addFishAndChipsToUser = { _id: '60d9ebc46ed1af2ff4e4d9bb' }

// const Update = () => {
//   user
//     .findById(addFishAndChipsToUser)
//     .then((res) => {
//       console.log(res)
//       res.favoriteFood.push('Fish and Chips')
//       console.log('favoriteFood updated successfully')
//       res.save()
//     })
//     .catch((err) => console.log(err))
// }
// Update()

// *******************Perform New Updates on a Document Using model.findOneAndUpdate()*****************

// const Update = async () => {
//   let userAge = await user.findOneAndUpdate(
//     { name: 'Malek' },
//     { age: 20 },
//     { new: true, useFindAndModify: false }
//   )
//   console.log(`Age of ${userAge.name} updated to ${userAge.age} years old`)
// }
// Update()

// ***********************Delete One Document Using model.findByIdAndRemove******************************

// let userToDeleteId = '60d9ea87379a8c1650afbbbf'

// const Delete = () => {
//   user.findByIdAndRemove(userToDeleteId, (err, data) => {
//     err ? console.log('Error', err) : console.log('User removed', data)
//   })
// }
// Delete()

// ******************MongoDB and Mongoose - Delete Many Documents with model.remove()**********************

// let userName = { name: 'Lilya' }

// const Delete = () => {
//   user.remove(userName, (err) => {
//     err ? console.log('Error', err) : console.log('User removed')
//   })
// }
// Delete()

//******************* Chain Search Query Helpers to Narrow Search Results**********************************

// const chainSearch = async () => {
//   const Pr = await user
//     .find({ favoriteFoods: { $in: ['Burritos'] } })
//     .sort({ name: 'asc' })
//     .limit(2)
//     .select('-age')
//     .exec()
//     .then((res) => console.log('Burritos lovers:', res))
//     .catch((err) => console.log('Error:', err))
// }
// chainSearch()

app.listen(port, (err) => 
err
?console.log('oops!!!', err)
:console.log('Listening on port: $')
)