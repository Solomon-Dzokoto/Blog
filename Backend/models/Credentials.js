import mongoose from "mongoose";

const Credentials = new mongoose.Schema({
    title:{type:String,required:true},
    details:{type:String,required:true},
    category:{type:String,default:"Others"},
    Users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

})