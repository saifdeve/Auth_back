const {Schema , model} = require("mongoose")

const userSchema = new Schema({
    name:{
        type : String
    },
    password:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        unique : true,
        required : true,

    } 
})

const userModel = model("users",userSchema)
module.exports = userModel