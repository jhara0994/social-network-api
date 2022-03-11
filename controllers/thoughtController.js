const { Thought, User } = require('../models')

module.exports = {
    // GET all thoughts
    getThoughts(req,res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    // GET single thought
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('__v')
        .populate('reactions')
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
        .then((thoughts) => res.json(thoughts))
        .catch ((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },
    // Update thought
    updateThought(req,res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId })
        .then((thoughts) => {
            !thoughts
                ? res.status(404).json({ message: 'No thought found with that ID' })
                : res.json(thoughts)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    // Delete thought
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thoughts) => {
            !thoughts
                ? res.status(404).json({ message: 'No thought found with that ID' })
                : res.json(thoughts)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    }

}