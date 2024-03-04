import { create } from "../controller/test.js"
import express from 'express'

const router = express.Router()

router.post('/creat',create)


export default router