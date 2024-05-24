import mongoose, { deleteModel } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: "https://t4.ftcdn.net/jpg/04/44/09/97/360_F_444099733_Jl7FKhpU3hmr2airTJmKHOaiOfkskOor.jpg"
    }}, 
    {timestamps: true}
);


const User = mongoose.model('User', userSchema);


export default User;

