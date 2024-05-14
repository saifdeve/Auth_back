const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
// Models
const userModel = require("../models/users")

router.get("/login", async(req,res)=>{
    try{
        const user = await userModel.find()
        res.json(user)
    }catch(err){
        res.json({error : "Any users are finded"})
    }
})
router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        const finedUser = await userModel.findOne({email})
        if (!finedUser) {
            return res.json({ error: "Login or password is incorrect" });
        }

        const passwordMatch =await bcrypt.compare(password , finedUser.password)
        if (passwordMatch && finedUser){
            const token =await jwt.sign({ id: finedUser._id }, process.env.TOKEN);
            return res.json({ message: "Login successfully", token, userId: finedUser._id });
        }else{
            return res.json({error: "login or password is incorrect"}) 
        }
    }catch(err){
        return res.json({error: "someting is wrong"})
    }
})
module.exports = router