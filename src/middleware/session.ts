import { Request, Response , NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/req-ext';



const checkJwt = (req: RequestExt, res: Response , next: NextFunction) =>{
    try{
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser?.split( ' ').pop(); // partimos el string vacio donde alla un espacio[ "bearer" , "1111"]  = 1111
        const isUser = verifyToken(`${jwt}`); //Indicamos al jwt que sea un template string , ya que el TS dice que es posible que sea undefined
        console.log(isUser);//quien es la persona que esta haciendo la peticion
        if(!isUser){
            res.status(401)
            res.send(" Not seccion valid ( JWT NOT VALID")
        }else{
            req.user = isUser
            console.log({jwtByUser})
            next();
        }

    }catch(e){
        res.status(400);
        res.send("Session not valid");
    }
};

export { checkJwt };