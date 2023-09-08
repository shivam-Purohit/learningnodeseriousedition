const fs = require("fs");

// fs.writeFileSync('./test.txt',"this is a synchronous file");

// fs.writeFile('./test.txt', "this is a async file", (err)=>{});

// const results = fs.readFileSync('./test.txt', 'utf-8');


// console.log(results);

// fs.readFile('./test.txt', 'utf-8', (err, results)=>{
//     if(err){
//         console.log("error", err);
//     }
//     console.log(results);
// })

fs.appendFileSync('./test.txt', `\n hey there ${Date.now()}`)