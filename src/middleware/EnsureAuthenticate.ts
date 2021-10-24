import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string,
}



export function EnsureAuthenticate(
    request:Request,
    response:Response,
    next: NextFunction
) { 
   const authToken = request.headers.authorization

   if(!authToken){
       return response.status(401).json({
           errorCode: "Token invalid"
       })
   }

   const [, token] = authToken.split(" ")

   try {
       const { sub } = verify(token, process.env.JWT_SECRET) as IPayLoad

       request.user_id = sub

       return next()
   } catch (error) {
       return response.status(401).json({errorCode: " Token expired"})
   }
}