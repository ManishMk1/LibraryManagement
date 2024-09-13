const express=require('express');
const { connection } = require('./connection');
const app=express();
const jwt=require('jsonwebtoken');const PORT=8080;
const cors=require('cors');
const bcrypt = require('bcrypt');
const {compare}=require('bcrypt');
const saltRounds = 10;
const JWT_KEY='SECRET_KEY';
const maxAge=3*24*60*60*1000;
const createToken=(email,userId,name)=>{
    const token=jwt.sign({email:email,userId:userId,name:name},JWT_KEY,{expiresIn:maxAge});
    console.log(token);
    return token;

}


// Set up CORS with credentials
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Enable sending cookies and other credentials in requests
}));

  
app.use(express.json());
// app.use(express.urlencoded())
const {User} =require('../backend/models/userData.js')
const {Admin} =require('../backend/models/adminData.js')
app.get("/",(req,res)=>{
    res.send("Hello from the server");
})
app.post("/user/signup",async (req,res)=>{
    const {name,email,password,role,userId}=req.body;
    console.log(name,email,password,role,userId);
    try {
        if(name&&email&&password&&role){
            const findUser=await User.findOne({userId});
            const findAdmin=await Admin.findOne({userId});
            if(!findUser&&!findAdmin){
                const salt= await bcrypt.genSalt(saltRounds);
                const hash=await bcrypt.hash(password,salt);
                if(role==="User"){
                    const user=new User({name,userId,email,password:hash});
                    await user.save();
                    console.log(user);
                    return res.status(200).send("User created Successfully")
                }else{
                    const admin=new Admin({name:name,userId:userId,email:email,password:hash});
                    await admin.save();
                    console.log(admin);
                    return res.status(200).send("Admin created Successfully");
                }
            } 
        }else{
            return res.status(200).send("Email or Name or Password or Role is missing ");
        }
    } catch (error) {
        console.log(error);
    }
})
app.post("/user/login",async(req,res)=>{
    const {userId,password}=req.body;
    try {
        if(userId&&password){
            const user=await User.findOne({userId});
            if(!userId){
             return res.status(404).send("User with the given email not found");
            }
            const auth=await compare(password,user.password);
            if(!auth){
             return res.status(400).send("Password is incorrect.");
            }
         res.cookie("jwt",createToken(userId,user.name),{
            httpOnly: true, // Ensures that the cookie is accessible only by the web server
  maxAge: 3 * 24 * 60 * 60 * 1000, // Cookie expiration in 3 days
  sameSite: "Lax", // Set SameSite attribute for cross-site cookies
         });
         return res.status(200).json({
            user:{
                id:user.id,
                userId:userId,
                email:user.email,
                token:token,
               role:user.role
                }
         })
        
        }
    } catch (error) {
        console.log(error);
    }
})
app.post("/admin/login",async(req,res)=>{
    const {userId,password}=req.body;
    try {
        if(userId&&password){
            const user=await Admin.findOne({userId});
            if(!userId){
             return res.status(404).send("User with the given email not found");
            }
            const auth=await compare(password,user.password);
            if(!auth){
             return res.status(400).send("Password is incorrect.");
            }
            const token=createToken(user.email,userId,user.name);
         res.cookie("token",token,{
            httpOnly: true, // Ensures that the cookie is accessible only by the web server
  maxAge: 3 * 24 * 60 * 60 * 1000, // Cookie expiration in 3 days
  sameSite: "Lax", // Set SameSite attribute for cross-site cookies
         });
         return res.status(200).json({
             user:{
             id:user.id,
             userId:userId,
             email:user.email,
             token:token,
            role:user.role
             }
         })
        
        }
    } catch (error) {
        console.log(error);
    }
})
connection();

app.listen(PORT,()=>{
    console.log("server is live");
})