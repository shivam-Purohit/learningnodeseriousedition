const express = require('express');
const app = express();
const PORT = 8000;

const { builtinModules } = require('module');
const userRouter = require('./routes/user');
const {connectDB} = require('./connect');
// const {logReqRes} = require('./middleware')

app.use(express.urlencoded({extended: false}));

//making mongodb connect 
connectDB('mongodb://127.0.0.1:27017/project1').then(()=>console.log("mongodb connected"));

//Routes
// app.use(logReqRes('log.txt'))
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`listening at PORT ${PORT}`);
})
