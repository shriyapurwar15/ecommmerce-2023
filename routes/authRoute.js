import express from 'express'
import { registerController, loginController,testController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

// router object

const router = express.Router()

// routing
// REGISTER|| METHOD POST
router.post('/register', registerController)

// Forgot Password || POST
router.post('/login',loginController);

// LOGIN || POST
router.post('/login', loginController)

// test routes
router.get('/test',requireSignIn,isAdmin,testController)

export default router