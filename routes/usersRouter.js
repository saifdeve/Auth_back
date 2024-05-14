const express = require("express")
const router = express.Router();
// Models
const userModel = require("../models/users")

router.get("/users" , async(req,res)=>{
    try{
        const listUsers = await userModel.find();
        res.json(listUsers)
    }catch(err){
        res.json({error :err.message})
    }

})
router.post("/users", async(req,res) => {
    try{
        const user = new userModel(req.body);
        await user.save()
        res.json({message : "User is created"})
    }catch(err){
        res.json({error : "User isn't created"})
    }
})
router.put("/users/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const dataToUpdate = req.body;
        const user = await userModel.findByIdAndUpdate(id,dataToUpdate,{ new:true }) 
        res.json({message : "User is Updated"})
    }catch(err){
        res.json({error: "User isn't updated"})
    }
})
router.delete("/users/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        await userModel.findByIdAndDelete(id)
        res.json({message : "user is deteled"})
    }catch(err){
        res.json({error:"user isn't deleted"})
    }
})
module.exports = router;