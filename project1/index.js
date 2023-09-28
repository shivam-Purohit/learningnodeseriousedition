const express = require('express');
const app = express();
const PORT = 8000;

const users = require('./MOCK_DATA.json');

app.route('/api/users/:id')
.get( (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ==id)
    return res.json(user);
})
.put( (req, res) => {
    return res.json({status:"pending"});
})
.delete( (req, res) => {
    return res.json({status:"pending"});
})
.patch( (req, res) => {
    return res.json({status:"pending"});
})

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