const express = require('express')
const app = express();
const path = require('path')
const {connectToMongoDB} = require('./connect')
const  urlRoute = require('./routes/url')
const PORT =  8001;
app.use(express.json())

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
app.listen(PORT, ()=>{
    console.log(`listening at port: ${PORT}`);
})
app.use('/url', urlRoute);
app.use('', (req, res)=>{
    res.render('home');
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))



