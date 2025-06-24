const user = require('../models/model');
exports.getRoute = async(req,res)=>{

    const userData = await user.find();
    res.status(201).json({data:userData})
}
exports.postRoute = async (req,res)=>{
    const{username,password} = req.body;
    const exist = await user.findOne({username});
    if(exist){
         return res.status(401).json({message:"User already exists"})
    }
    const newUser = new user({username,password})
    await newUser.save();
    res.status(201).json({message:"User created successfully"})
}
exports.putRoute = async (req, res) => {
    const { username, password } = req.body;
    try {
        const update = await user.findByIdAndUpdate(req.params.id, { username, password }, { new: true });
        if (!update) {
            return res.status(401).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: update });
    } catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
};
exports.deleteRoute = (req,res)=>{
    res.send("Delete route is working");
}