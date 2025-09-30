import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { User } from "../models/userModels.js";

export const registerUser = expressAsyncHandler( async (req,res) => {
    const {username, email, password} = req.body;
    if( !username || !email || !password){
        res.status(400);
        throw new Error("All fileds are required.")
    }

    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("Email address already in use")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    console.log("Hashed Password", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created: ${user}`)
    if (user) {
        res.status(201).json({_id:user.id , email : user.email})
    } else {
        res.status(400)
        throw new Error("User data is invalid")
    }

});

export const loginUser = expressAsyncHandler( async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const user = await User.findOne({email});
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email : user.email,
                id : user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"}) 
        res.status(200).json({accessToken})
    } else{
        res.status(401);
        throw new Error("Email or Password is incorrect")
    }


})

export const currentUser = expressAsyncHandler( async (req,res) => {

})