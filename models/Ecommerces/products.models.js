import mongoose from 'mongoose';
import { Catogary } from './catogaries.models';

const ProductSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require:true
    },
    productImage:{
        // in db we store image through buffering but it make db heavy.
        // in normal we use 3 party cloud
        type: String,

    },
    price:{
        type: Number,
        default:0
    },
    stock:{
        type: Number,
        default0
    },
    catogary:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Catogary",
        required : true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema);

