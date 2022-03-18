const { Thought, Reaction } = require('../models')
// const errorHandler = require('errorhandler')
// const app = express()


module.exports = {
    // GET all thoughts
    getThoughts(req,res) {
        Thought.find({})
        // .populate({
        //     path: 'user',
        //     select: '__-v'
        // })
        // .select('__-v')
        // .sort({ _id: -1 })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    // GET single thought
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
        // .populate({
        //     path: 'user',
        //     select: '__-v'
        // })
        // .select('__v')
        // .sort({ _id: -1 })
        .then((thoughts) => 
        !thoughts
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json(thoughts)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Create a new thought
    createThought(req,res) {
        Thought.create(req.body)
        .then((thoughts) => { res.json(thoughts)
            // return User.findOneAndUpdate(
            //     { username: body.username },
            //     { $push: { thoughts: _id }},
            //     { new: true },
            // )
        })
        // .then(thoughts => {
        //     !thoughts
        //     ? res  
        //         .status(404)
        //         .json({ message: 'No thought found with this ID'})
        //     : res.json(thoughts)
        // })
        // .catch ((err) => {
        //     console.log(err)
        //     return res.status(500).json(err)
        // })
    },
    // Update thought
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true}
            )
        .then((thought) => {
            !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(thought)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    // Delete thought
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        // .populate('reactions')
        // .select('__v')
        .then((thought) => {
            !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(thought)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    // Add a new reaction
    addReaction(req ,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $push: {reactions: req.body }},
            { new: true , runValidators: true }
            )
        // .populate('reactions')
        // .select('__-v')
        .then(thoughts => {
            !thoughts
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(thoughts)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    // Delete a reaction
    deleteReaction(req,res) {
        Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {reactionId: req.params.reactionId}}},
            { new: true },
        )
        .then(thoughts => res.json(thoughts))
        //     {
        //     !thoughts 
        //     ? res
        //         .status(404)
        //         .json({ message: 'No thought found with that ID!' })
        //     :res.json(thoughts)
        // })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
}