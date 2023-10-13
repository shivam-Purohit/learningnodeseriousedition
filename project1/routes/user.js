const express = require('express');

const router = express.Router();
const { getAllusers,
    createUser,
    getUserbyId,
    delUserbyId,
    modifyUser,
} = require('../controllers/user')

router
.get('/',getAllusers)
.post('/',createUser) 

router.route('/:id')
.get(getUserbyId)
.delete(delUserbyId)
.patch(modifyUser)

module.exports = router;