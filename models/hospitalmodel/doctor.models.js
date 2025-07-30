import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        require:true
    },
    specialty:{
        type:String,
        require:true
    },
    expirenceInYears:{
        type:Number,
        default:0
    },
    workInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]


},{timestamps:true})

export const Doctor = mongoose.model("Doctor", doctorSchema)