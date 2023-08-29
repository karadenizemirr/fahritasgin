import { Injectable } from "@nestjs/common";
import * as jwy from "jsonwebtoken";

@Injectable()
export class JwtService {
    private readonly secret: string = "fahritaskin"

    constructor(){}

    generateToken(payload: any){
        return jwy.sign(payload, this.secret)
    }

    verifyToken(token: string){
        return jwy.verify(token, this.secret)
    }

    
}