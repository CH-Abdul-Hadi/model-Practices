import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const orderItemSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    qunatity:{
        type:Number,
        require:true
    }

})
   

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        require: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type:[ orderItemSchema]
    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["Pending","Cancelled","Deliverd"],
        default:"Pending"
    }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
