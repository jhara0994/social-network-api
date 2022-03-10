const { Schema, Types } = require('mongoose')
const thoughtSchema = require('./Thought')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
            default: 'No reaction',
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        // reactionCount: {
        //     type: Number,
        //     required: true,
        //     default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
        // },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema