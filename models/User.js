const { Schema, model } = require('mongoose')
const friendSchema = requie('./Friend')

const userSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
            max_length: 30,
        },
        last: {
            type: String, 
            required: true,
            max_length: 30,
        },
        github: {
            type: String,
            required: true,
            max_length: 50,
        },
        friends: [friendSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const User = model('user', userSchema)

module.exports = User