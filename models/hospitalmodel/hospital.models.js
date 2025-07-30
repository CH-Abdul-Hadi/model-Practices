import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    addressLine1:{
        type:String,
        require:true
    },
    addressLine:{
        type:String,
    },
    city:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    SepcializationIn:[
        {
            type:string
        }
    ]

},{
    timestamps: true
})

export const Hospital = mongoose.model("Hospital", hospitalSchema)