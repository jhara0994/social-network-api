const { Schema, Types } = require('mongoose')
const thoughtSchema = require('./Thought')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionName: {
            type: String,
            required: true,
            max_length: 20,
            min_length: 5,
            default: 'No reaction',
        },
        reactionCount: {
            type: Number,
            required: true,
            default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
        },
        thought: [thoughtSchema]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema