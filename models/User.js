const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')
const friendSchema = require('./Friends')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 30,
        },
        email: {
            type: String, 
            required: true,
            max_length: 30,
        },
        thought: [thoughtSchema],
        friends: [friendSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
)

const User = model('user', userSchema)

module.exports = User