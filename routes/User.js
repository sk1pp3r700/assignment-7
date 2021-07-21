const express = require('express');

const router = express.Router();
const { signUp, signIn, getUsers } = require('../controllers/user');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/', getUsers);


module.exports = router;