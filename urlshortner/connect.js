const mongoose = require('mongoose')

async function connectToMongoDB(url){
    return mongoose.connect(url).then(
        console.log('connect to db')
    )
}
module.exports = {
    connectToMongoDB,
}