const express = require('express')
const router = express.Router()
const studentController = require('./student.controller')

router.get('/students', studentController.getAllStudents)
router.post('/students', studentController.postStudent)
router.get('/students/:id', studentController.getByID)
router.patch('students/:id', studentController.updateStudent)
router.delete('/students/:id', studentController.deleteStudent)

module.exports = router