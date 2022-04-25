require('dotenv').config()
const mongoose = require('mongoose')
function connectDb() 
{

    mongoose.Promise = global.Promise
    mongoose.connect("mongodb+srv://vandhan_pandey12:Vandan@995@cluster0.wfi7h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
}

module.exports = connectDb