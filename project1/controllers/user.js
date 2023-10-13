const User = require('../models/user')

async function getAllusers (req, res){
    const allDBusers = await User.find({});
    return res.json(allDBusers);
}
async function createUser (req, res){
    const body = req.body;
    const result = await User.create({
        firstName: body.firstName,
        lastName : body.lastName,
        jobTitle : body.jobTitle,
        email : body.email,
        gender : body.gender
    })
    console.log(result);
    
    return res.status(201).json({msg : "successfully created"})
}

async function getUserbyId(req, res){
    const user = await User.findById(req.params.id)
    return res.json(user);
}

async function delUserbyId ( req, res){
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json(user);
}

async function modifyUser (req, res){
    const user = await User.findByIdAndUpdate(req.params.id, {gender : "female"})
    return res.json(user);
}

module.exports = {
    getAllusers,
    createUser,
    getUserbyId,
    delUserbyId,
    modifyUser,
}