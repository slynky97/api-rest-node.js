const { Router} = require('express');
const router = Router();

const { getUsers, createUsers, getUserById, deleteUser, ubdateUser, obtenerEdades } = require('../controllers/index.controller')

router.get('/users', getUsers)
router.post('/users', createUsers)
router.get('/users/:id', getUserById)
router.delete('/user/:id', deleteUser)
router.put('/users/:id', ubdateUser)
router.get('/users/edades/get', obtenerEdades)


module.exports = router;