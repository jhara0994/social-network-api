const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        },
        createdAt: {
            type: Date,
            default: () => new DataTypes.NOW,
        },
        username: {
            type: String,
            required: true,
        },
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
            setters: true,
        },
        id: false,
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought