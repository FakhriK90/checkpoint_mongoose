const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        default: 'Fakhri'
    },

    age:{
        type: Number,
        default: 30
    },

    favoriteFood:{
        type: [String],
        default: undefined
    }
})

const user = model('user', userSchema)

module.exports = user