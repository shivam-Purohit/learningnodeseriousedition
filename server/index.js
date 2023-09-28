    const http = require("http");
    const express = require('express')

    const app = express();

    app.get('/', (req, res)=>{
            res.send('hello ' + req.query.name)
    })

    app.get('/about', (req, res)=>{
        res.send("hello from express about page")
    })


    app.listen(8000, ()=>{
        console.log("listening at port "+8000);
    })

