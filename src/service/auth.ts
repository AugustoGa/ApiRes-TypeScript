import UserModel from "../models/user";
import { User } from '../interfaces/user.interface';
import { encrypt, verfied } from "../utils/bcrypt.handle";
import { Auth } from "../interfaces/auth.interface";

const registerNewUser = async( {email , password , name }: User ) =>{
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return 'Already User';
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create
    ({ 
        email ,
        password: passHash,
        name 
    });

    return registerNewUser;
};

const loginUser = async({ email, password }: Auth) =>{
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return 'Not Found User';

    const passwordHash = checkIs.password //Encriptado proveniente de la bd
    const isCorrect = await verfied(password , passwordHash);

    if(!isCorrect) return 'Password Incorrect';
    return checkIs;
};

export { registerNewUser  , loginUser };