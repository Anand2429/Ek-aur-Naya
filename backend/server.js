import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudiary from './config/cloudinary.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudiary()

//middlewares
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port, ()=> console.log("Server started",port))