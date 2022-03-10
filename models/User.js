const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')
const friendSchema = require('./User')

const userSchema = new Schema(
    console.log('Reading Schema'),
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String, 
            required: true,
            max_length: 50,
        },
        thought: {
            type: [thoughtSchema]
        },
        friends: { 
            type: [friendSchema]
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
            setters: true,
        },
    }
)

const User = model('user', userSchema)

module.exports = User