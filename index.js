require('dotenv').config()
const express=require('express');
const cors=require('cors')
const jwt=require('jsonwebtoken');

const mongodb=require('./src/database/database')
const authRoutes=require('./src/routes/auth')

const app=express();

app.use(express.json());

app.use(cors());

app.use('/auth',authRoutes)


app.listen(process.env.PORT,()=>{
    console.log("Server has been started");
})