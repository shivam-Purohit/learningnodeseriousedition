const express = require('express');
const app = express();
const PORT = 8000;
const fs = require('fs');

const users = require('./MOCK_DATA.json');

//middleware
app.use(express.urlencoded({extended: false}));

app.route('/api/users/:id')
.get( (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ==id)
    return res.json(user);
})
.delete( (req, res) => {
    const userIdToDelete= Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === userIdToDelete);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(userIndex, 1)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        res.json({status:`deleted id ${req.params.id}`})
    })
})
.patch( (req, res) => {
    return res.json({status:"pending"});
})


app.post('/api/users', ( (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        
        return res.json({status:"success ", id: users.length});
    });
}) )
app.get('/users', (req, res)=>{
    const html = `
    <ul>
       ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    return res.send(html);
})

app.get('/api/users', (req, res)=>{
    return res.json(users);
})


app.listen(PORT, ()=>{
    console.log(`listening at PORT ${PORT}`);
})