const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

// Models
const userModel = require("../models/users")
const hashNumber = process.env.HASHEDNUMBER
router.get("/register",async(req,res)=>{
    try{
        const users = await userModel.find()
        res.json(users)
    }catch(err){
        res.json({error :"Any Users are finded "})
    }
})
router.post("/register",async(req,res)=>{
    try{
        const {email,password} = req.body ;
        const findUser = await userModel.findOne({email})
        // findUser && res.json({error : "regiser with deffirent email"})
        if (findUser) {
            return res.json({ error: "Register with a different email" });
        }

        const hashedPassword = await bcrypt.hash(password,hashNumber)
        await userModel.create({ email, password: hashedPassword });
        res.json({message : "Register successfully"})
    }catch(err){
        res.json({error : "Register failded"})
    }
})
module.exports = router