import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import auth from './src/route/auth.js'
const app = express()

app.use(cors())
app.use(bodyParser.json());

app.use('/auth',auth)

app.listen(3001,() => {
    console.log("app listen on port 3001")
})