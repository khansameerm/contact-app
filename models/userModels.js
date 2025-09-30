import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username :{
        type : String,
        required: [true, "Please add username"],
     },
     email : {
        type : String,
        required: [true, "Please add user email"], 
        unique: [true, "Email address already in use"]       
     },
     password : {
        type: String,
        required: [true, "Please add user password"], 
        min: 8,
     }
},  {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
