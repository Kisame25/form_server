import express from "express";
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import cors from 'cors'
import auth from './src/route/auth.js'
const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json());

app.use('/auth',auth)

app.listen(process.env.LPORT,() => {
    console.log(`app listen on ${process.env.LHOST}:${process.env.LPORT}`)
})