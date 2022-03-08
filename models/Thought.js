const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtName: {
            type: String,
            required: true,
            max_length: 30,
        },
        thoughtContent: {
            type: String,
            required: true,
            max_length: 100,
        },
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought