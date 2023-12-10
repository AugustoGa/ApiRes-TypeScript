import { Schema, Types, model , Model } from "mongoose";
import { Storage } from "../interfaces/storage";


const SorageSchema = new Schema<Storage>(
    {
        fileName:{
            type: String,
        },
        idUser:{
            type: String,
        },
        path:{
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const StorageModel = model('storage', SorageSchema);//nombre que va a tener la tabla en la base de datos
export default StorageModel;