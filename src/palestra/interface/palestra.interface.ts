import { Document } from 'mongoose';

export interface Palestra extends Document{
    tema: string,
    palestrante: string,
    descricao: string,
    data: Date
}