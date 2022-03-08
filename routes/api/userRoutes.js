const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);

// update user 
router.route('/:userId').get(getSingleUser).post(updateUser);

// /api/students/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
