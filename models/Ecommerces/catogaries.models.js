import mongoose from 'mongoose';

const CatogarySchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    }
}, { timestamps: true });

export const Catogary = mongoose.modele('Catogary', CatogarySchema);
