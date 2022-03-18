const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  // addThought,
  // removeThought,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId  GET single user, Update user, delete user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// // /api/users/:userId/friends
// router.route('/:userId/friends').post(addFriend)

// /api/users/:userId/friends  Add friend, Delete friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
