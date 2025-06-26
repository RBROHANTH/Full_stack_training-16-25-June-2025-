const mongoose = require('mongoose')
const LINK = process.env.LINK
const connetDB = async ()=>{
    try{
        await mongoose.connect(LINK);
        console.log("successfully connected")
    }
    catch{
        console.log(err)
    }
}
module.exports = connetDB