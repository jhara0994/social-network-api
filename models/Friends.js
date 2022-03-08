const { Schema, Types } = require('mongoose')
const thoughtSchema = require('./Thought')

const friendSchema = new Schema(
    {
        friendId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        friendFirstName: {
            type: String,
            required: true,
            max_length: 30,
        },
        friendLastName: {
            type: String,
            required: true,
            max_length: 50,
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

module.exports = friendSchema