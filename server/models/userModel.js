import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        requried: true
    },
    lname: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },
})


export default mongoose.model("User", userSchema);