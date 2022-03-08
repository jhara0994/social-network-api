const { Schema, Types } = require('mongoose')
const reactionSchema = require('./Reaction')

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
        reaction: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = friendSchema