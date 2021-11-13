import * as mongoose from 'mongoose';

export const PalestraSchema = new mongoose.Schema({
    tema: {type: String, unique: true},
    palestrante: {type: String},
    descricao: {type: String},
    data: {type: Date}
}, { timestamps: true, collection: 'palestra'})