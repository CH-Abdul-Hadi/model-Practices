import mongoose from 'mongoose';

const CatogarieSchema = new mongoose.Schema({}, { timestamps: true });

export const Catogaries = mongoose.modele('Catogaries', CatogarieSchema);
