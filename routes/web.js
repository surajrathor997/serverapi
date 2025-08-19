const express = require('express')
const contactcontroller = require('../controller/contactcontroller')
const teachercontroller = require('../controller/Teacher.controller')
const CourseController = require('../controller/CourseController')
const userController = require('../controller/User.controller')
const checkAuth = require('../middleware/auth')
const router = express.Router()







// contact
 router.get('/contact',contactcontroller.display)
 router.post('/create',contactcontroller.create)
 router.get('/view/:id',contactcontroller.view)
 router.put('/update/:id',contactcontroller.update)
 router.delete('/delete/:id',contactcontroller.delete)


 // teacher
 router.get('/teacher',teachercontroller.display)
 router.post('/teachercreate',teachercontroller.create)
 router.get('/teacher/view/:id',teachercontroller.view)
 router.put('/teacher/update/:id',teachercontroller.update)



 // course
 router.get('/course',CourseController.display)
 router.post('/course/create',CourseController.create)
 router.get('/course/view/:id',CourseController.view)
 router.put('/course/update/:id',CourseController.update)
 router.delete('/course/delete/:id',CourseController.delete)


 // user 
 router.post('/register',userController.register)
 router.post('/login',userController.login)
 router.get('/profile',checkAuth,userController.profile)
 router.get('/logout',checkAuth,userController.logout)
//  router.put('/changepass',checkAuth,userController.changePassword)



module.exports = router