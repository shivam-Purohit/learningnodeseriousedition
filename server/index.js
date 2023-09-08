    const http = require("http");

    const myServer = http.createServer( (req, res) => {
        // console.log(req.headers);

        switch(req.url){
            case '/' :
                 res.end("homepage");
            break;
            case "/about":
                 res.end("i am shivam purohit");
            break;
            default:
                res.end("404 not found");
        }
    


    })
 const PORT = 8000;
    myServer.listen(PORT, ()=> console.log(`server is started at port ${PORT}`))

