import { Schema, Types, model , Model } from "mongoose";
import { User } from "../interfaces/user.interface";


const UserSchema = new Schema<User>(
    {
        name:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        description:{
            type: String,
            default: '...Descripcion...'
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model('users', UserSchema);//nombre que va a tener la tabla en la base de datos
export default UserModel;