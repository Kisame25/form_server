import { login,logout,getSession,getUser,refreshUserSession,resetPasswordForEmail,updatePassword } from "../controller/auth.js";
import express  from "express";

const router = express.Router()


router.post('/login',login)
router.get('/logout',logout)
router.get('/getSession',getSession)
router.get('/getUser',getUser)
router.get('/refreshUserSession',refreshUserSession)
router.post('/resetPasswordForEmail',resetPasswordForEmail)
router.post('/updatePassword',updatePassword)

export default router