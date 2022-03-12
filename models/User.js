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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
})

const User = model('user', userSchema)

module.exports = User