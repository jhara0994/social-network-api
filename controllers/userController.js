const { User, Thought } = require('../models')

module.exports = {
    // GET all users
    getUsers(req,res) {
        User.find()
        .populate({
            path: 'thoughts',
            select: '__-v'
        })
        .populate('friends')
        .select('-__v')
        .then(async (users) => res.json(users))
        .catch((err) => {
            console.log(err);
            return res.status(404).json(err);
          });
    },
    // GET single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .populate({
            path: 'thoughts',
            select: '__-v'
        })
        .populate('friends')
        .select('-__v')
        .then(async (user) => {
            ! user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.json({
                user,
            })
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // Create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err)
        );
     },
    // Update a user
    updateUser(req,res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true, runValidators: true })
        .then((user) => {
            ! user
            ? res.status(404).json({ message: 'No user exists with this ID!' })
            : res.json({
                user,
            })
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    // Delete a user
    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then ((user) => {
            !user
            ? res.status(404).json({ message: 'No student exists with this ID!' })
            : Thought.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId }},
                { new: true },
            )
        })
        .then((thoughtData) => {
            !thoughtData
            ? res.status(404).json({
                message: 'User deleted, but no thoughts found',
            })
            : res.json({ message: 'User successfully deleted' })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          }); 
    },
    // Add thought to a user
    // addThought(req,res) {
    //     console.log('A thought is being added')
    //     console.log(req.body)
    //     User.findOneAndUpdate(
    //         { _id: req.params.id },
    //         { $addToSet: { thoughts: req.body }},
    //         { runValidators: true, new: true },
    //     )
    //     .then((user) => {
    //         !user
    //         ? res
    //             .status(404)
    //             .json({ message: 'No user found with that ID' })
    //         : res.json(user)
    //     })
    //     .catch((err) => res.status(500).json(err))
    // },
    // // Remove thought
    // removeThought(req,res) {
    //     User.findByIdAndUpdate(
    //         { _id: req.params.userId },
    //         { $pull: { thoughts: { thoughtId: req.params.thoughtId }}},
    //         { runValidators: true, new: true },
    //     )
    //     .then((user) => {
    //         !user
    //         ? res
    //             .status(404)
    //             .json({ message: 'No user found with that ID' })
    //         : res.json(user)
    //     })
    //     .catch((err) => res.status(500).json(err))
    // },
    // Add friends to user
    addFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { $addToSet: { friends: req.params.friendId }},
            { new: true, runValidators: true },
            )
        // .populate('friends')
        // .select('__-v')
        .then(user => {
            !user
            ? res
                .status(404)
                .json({ message: 'No user found with this ID!'})
            : res.json(user)
        })
        .catch((err) => res.status(500).json(err))
    },
    // Delete a friend
    deleteFriend(req,res) {
        User.findOneAndDelete(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendId }},
            { new: true },
            )
        // .populate('friends')
        // .select('__-v')
        .then(user => {
            !user
            ? res
                .status(404)
                .json({ message: 'No user found with this ID!'})
            : res.json(user)
        })
        .catch((err) => res.status(500).json(err))
    }
}

