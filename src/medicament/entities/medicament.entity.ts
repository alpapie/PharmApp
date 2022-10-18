import * as mongoose from 'mongoose';

export const MedicamentSchema = new mongoose.Schema({
    name: String,
    description: String,
    prix: Number,
 
});
export interface Medicament {
    id: string;
    name:string;
    description:string;
    prix:number;

}
