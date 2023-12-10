import { hash , compare } from "bcryptjs"; //encriptar


const encrypt = async (pass: string)=>{ //password en texto plano
    const passwordHash = await hash( pass , 8) //segundo argumento (dato para generar mas aleatoriedad)
    return passwordHash;
};

const verfied = async (pass: string , passHash: string)=>{
    const isCorrect = await compare(pass , passHash) //compara el texto en plano(contraseña) con la encriptacion
    return isCorrect;
};

export { encrypt , verfied };