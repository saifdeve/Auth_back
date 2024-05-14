const mongoose = require("mongoose")

const USER_DB = process.env.USERDB
const PASSWORD_DB = process.env.PASSWORD
const NAME_DB = process.env.NAMEDB

async function DataBase (){
    try{
        await mongoose.connect(`mongodb://${USER_DB}:${PASSWORD_DB}@ac-xcijinz-shard-00-00.1vykbap.mongodb.net:27017,ac-xcijinz-shard-00-01.1vykbap.mongodb.net:27017,ac-xcijinz-shard-00-02.1vykbap.mongodb.net:27017/${NAME_DB}?ssl=true&replicaSet=atlas-8cozgt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern`)
        console.log("Data Base is Connected!")
    }
    catch(err){
        console.log("Data Base isn't Connected :",err)
    };
}

module.exports = DataBase;