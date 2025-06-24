const user = require('../models/model');
const bcrypt = require('bcrypt');

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
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new user({username,password:hashedPassword})
    await newUser.save();
    res.status(201).json({message:"User created successfully"})
}

exports.signupRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (exist) return res.status(401).json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ user: newUser });
};

exports.loginRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (!exist) {
        return res.status(401).json({ message: "User Not Found" });
    }
    const valid = await bcrypt.compare(password, exist.password);
    if (valid) return res.status(201).json({ message: "Login Succesfull" });
    res.status(401).json({ messsage: "Password Invalid" });
};

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